import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** One-shot splash. Auto-hides after first paint + minimum dwell. */
export function SplashScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem("titanium:splash") === "done") {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("titanium:splash", "done");
    }, 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          aria-hidden
        >
          <div className="pointer-events-none absolute inset-0 ambient-bg" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-5"
          >
            <div className="relative grid size-16 place-items-center">
              <div className="absolute inset-0 animate-ping rounded-2xl bg-brand/30" />
              <div className="relative grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-glow shadow-2xl shadow-brand/40">
                <svg viewBox="0 0 24 24" className="size-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" />
                </svg>
              </div>
            </div>
            <div className="font-display text-xl font-bold tracking-tight">TITANIUM SECURITY</div>
            <div className="h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-brand to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}