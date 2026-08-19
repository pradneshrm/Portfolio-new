const fs = require('fs');
let code = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');
code = code.replace(
  /from-teal-400 via-cyan-300 to-sky-400/g,
  'from-teal-600 via-cyan-600 to-sky-600 dark:from-teal-400 dark:via-cyan-300 dark:to-sky-400'
);
fs.writeFileSync('src/components/HeroSection.tsx', code, 'utf8');
