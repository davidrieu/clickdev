import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const exts = new Set(['.tsx', '.ts']);

const replacements = [
  // 1400 — ordre: les chaînes les plus longues d'abord
  [
    'relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8',
    'relative z-10 si-shell-1400',
  ],
  [
    'relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 px-4 md:grid-cols-12 md:gap-12 md:px-8 lg:gap-14',
    'relative z-10 si-shell-1400 grid items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-14',
  ],
  [
    'relative z-10 mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-12 md:items-center md:gap-8 md:px-8 lg:gap-12',
    'relative z-10 si-shell-1400 grid gap-12 md:grid-cols-12 md:items-center md:gap-8 lg:gap-12',
  ],
  [
    'relative z-10 mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-12 md:items-center md:gap-8 md:px-8 lg:gap-12',
    'relative z-10 si-shell-1400 grid gap-12 md:grid-cols-12 md:items-center md:gap-8 lg:gap-12',
  ],
  [
    'relative z-10 mx-auto grid max-w-[1400px] gap-14 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:gap-16 lg:px-8',
    'relative z-10 si-shell-1400 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:gap-16',
  ],
  [
    'mx-auto grid max-w-[1400px] gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center lg:gap-16 lg:px-8',
    'si-shell-1400 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center lg:gap-16',
  ],
  [
    'mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 py-8 md:px-8 md:py-10',
    'si-shell-1400 flex flex-col items-center py-8 md:py-10',
  ],
  [
    'mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2.5 text-[11px] text-white/45 md:px-8 md:py-3 md:text-xs',
    'si-shell-1400 flex flex-wrap items-center gap-x-2 gap-y-1 py-2.5 text-[11px] text-white/45 md:py-3 md:text-xs',
  ],
  [
    'mx-auto flex max-w-[1400px] items-center gap-2 px-4 py-2.5 text-[11px] text-white/45 md:px-8 md:py-3 md:text-xs',
    'si-shell-1400 flex items-center gap-2 py-2.5 text-[11px] text-white/45 md:py-3 md:text-xs',
  ],
  [
    'mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 py-8 md:px-8 md:py-10',
    'si-shell-1400 flex flex-col items-center py-8 md:py-10',
  ],
  [
    'relative z-10 mx-auto max-w-[1400px] px-4 md:px-8',
    'relative z-10 si-shell-1400',
  ],
  // 1200, 1100, etc.
  [
    'relative z-10 mx-auto max-w-[1200px] px-4 md:px-8',
    'relative z-10 si-shell-1200',
  ],
  [
    'relative z-10 mx-auto max-w-[1100px] px-4 md:px-8',
    'relative z-10 si-shell-1100',
  ],
  [
    'mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-16 lg:py-20',
    'si-shell-1200 py-12 md:py-16 lg:py-20',
  ],
  [
    'relative z-10 mx-auto max-w-[960px] px-4 md:px-8',
    'relative z-10 si-shell-960',
  ],
  [
    'relative z-10 mx-auto max-w-[900px] px-4 md:px-8',
    'relative z-10 si-shell-900',
  ],
  [
    'relative z-10 mx-auto max-w-[820px] px-4 md:px-8',
    'relative z-10 si-shell-820',
  ],
  [
    'relative z-10 mx-auto max-w-[820px] px-4 text-center md:px-8',
    'relative z-10 si-shell-820 text-center',
  ],
  [
    'relative z-10 mx-auto max-w-[800px] px-4 md:px-8',
    'relative z-10 si-shell-800',
  ],
  [
    'relative z-10 mx-auto max-w-[800px] px-4 text-center md:px-8',
    'relative z-10 si-shell-800 text-center',
  ],
  [
    'relative z-10 mx-auto max-w-[760px] px-4 md:px-8',
    'relative z-10 si-shell-760',
  ],
  [
    'relative z-10 mx-auto max-w-[760px] px-4 text-center md:px-8',
    'relative z-10 si-shell-760 text-center',
  ],
  [
    'relative z-10 mx-auto max-w-[42rem] px-4 md:px-8',
    'relative z-10 si-shell-prose',
  ],
  [
    'relative mx-auto max-w-[900px] px-4 md:px-8',
    'relative si-shell-900',
  ],
  [
    'relative z-10 mx-auto max-w-[960px] px-4 text-center md:px-8',
    'relative z-10 si-shell-960 text-center',
  ],
];

function visit(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git' || name === '.next') continue;
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) visit(p);
    else if (exts.has(path.extname(name)) && !name.startsWith('apply-responsive')) {
      let text = fs.readFileSync(p, 'utf8');
      let n = 0;
      for (const [a, b] of replacements) {
        const count = (text.split(a).length - 1);
        if (count) {
          text = text.split(a).join(b);
          n += count;
        }
      }
      if (n) {
        fs.writeFileSync(p, text);
        console.log(p, n, 'replacements');
      }
    }
  }
}

visit(path.join(root, 'components'));
visit(path.join(root, 'app'));
visit(path.join(root, 'lib'));
