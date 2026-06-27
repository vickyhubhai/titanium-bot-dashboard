const fs = require('fs');

const transcriptPath = 'C:\\\\Users\\\\Vicky\\\\.gemini\\antigravity-ide\\brain\\dbd7055f-3644-4aa6-a2e7-f9577ba34ecf\\.system_generated\\logs\\transcript_full.jsonl';

const content = fs.readFileSync(transcriptPath, 'utf8');
const lines = content.split('\n');

const data = JSON.parse(lines[22]); // index 22 is line 23
// The viewed content is in data.content
// Let's write it to a file
fs.writeFileSync('original_root.tsx', data.content);
console.log('Successfully wrote original_root.tsx');
