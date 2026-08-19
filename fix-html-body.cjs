const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100', 'bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100');
fs.writeFileSync('index.html', html);
