/**
 * Génère les PNG (favicon navigateur, Apple, PWA manifest) à partir de public/favicon.avif.
 * Exécuter après mise à jour du fichier source : npm run icons:build
 */
import sharp from 'sharp';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'public', 'favicon.avif');

if (!existsSync(src)) {
  console.error('Missing public/favicon.avif — placez votre favicon AVIF dans public/ puis relancez.');
  process.exit(1);
}

/** Carré, conserve le ratio du logo sur fond transparent. */
function toSquarePng(size, dest) {
  return sharp(src)
    .resize(size, size, {
      fit: 'contain',
      position: 'center',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(dest);
}

async function main() {
  await toSquarePng(48, join(root, 'app', 'icon.png'));
  await toSquarePng(180, join(root, 'app', 'apple-icon.png'));
  await toSquarePng(192, join(root, 'public', 'assets', 'web-app-manifest-192x192.png'));
  await toSquarePng(512, join(root, 'public', 'assets', 'web-app-manifest-512x512.png'));
  console.log('OK: app/icon.png, app/apple-icon.png, manifest 192/512 depuis public/favicon.avif');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
