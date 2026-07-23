// Copies the canonical markdown (manifesto/, guide/, book/) into Starlight's
// content directory, injecting the frontmatter Starlight requires. The repo
// root stays the single source of truth; site/src/content/docs is generated.
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const out = join(root, 'site', 'src', 'content', 'docs');

function convert(srcPath, destPath, { order } = {}) {
  const raw = readFileSync(srcPath, 'utf8');
  const h1 = raw.match(/^# (.+)$/m);
  const title = (h1 ? h1[1] : destPath).replace(/^\d+\.\s*/, '');
  const body = h1 ? raw.replace(/^# .+$\n?/m, '') : raw;
  const fm = [
    '---',
    `title: ${JSON.stringify(title)}`,
    ...(order !== undefined ? [`sidebar:`, `  order: ${order}`] : []),
    '---',
    '',
  ].join('\n');
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, fm + body);
}

rmSync(join(out, 'book'), { recursive: true, force: true });
rmSync(join(out, 'guide'), { recursive: true, force: true });
rmSync(join(out, 'manifesto.md'), { force: true });
rmSync(join(out, 'diagrams'), { recursive: true, force: true });

// Diagrams: same relative paths work on GitHub (repo root) and in the site.
cpSync(join(root, 'diagrams'), join(out, 'diagrams'), { recursive: true });

convert(join(root, 'manifesto', 'manifesto.md'), join(out, 'manifesto.md'));
convert(join(root, 'guide', 'frontier-guide.md'), join(out, 'guide', 'index.md'), { order: 0 });
convert(join(root, 'guide', 'CHANGELOG.md'), join(out, 'guide', 'changelog.md'), { order: 1 });

const chapters = readdirSync(join(root, 'book'))
  .filter((f) => /^\d{2}-.+\.md$/.test(f) || /^appendix-.+\.md$/.test(f))
  .sort();
for (const [i, f] of chapters.entries()) {
  convert(join(root, 'book', f), join(out, 'book', f), { order: i });
}

console.log(`Synced ${chapters.length + 3} pages.`);
