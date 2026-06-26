import { createClient } from '@supabase/supabase-js';

const getEnv = (key: string): string | undefined => {
  if (typeof window !== 'undefined') {
    return (import.meta.env as Record<string, string>)?.[key];
  }
  return (
    (import.meta.env as Record<string, string>)?.[key] ||
    (process.env as Record<string, string>)?.[key]
  );
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY');

const isValidUrl = !!(supabaseUrl && supabaseUrl !== 'undefined' && supabaseUrl.startsWith('http'));
const isValidKey = !!(supabaseAnonKey && supabaseAnonKey !== 'undefined');

if (!isValidUrl || !isValidKey) {
  console.warn('Supabase credentials are missing or invalid in the current environment:', {
    url: supabaseUrl,
    hasKey: !!supabaseAnonKey,
  });
}

// In SSR or build phase, environment variables might not be available immediately.
// We fall back to a placeholder URL/key to avoid throwing a validation error on import.
export const supabase = (isValidUrl && isValidKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder-to-prevent-ssr-crash.supabase.co', 'placeholder-key');

