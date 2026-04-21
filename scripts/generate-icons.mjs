/**
 * Génère app/icon.png (48), app/apple-icon.png (180), icônes PWA manifest
 * à partir de public/favicon.png (toute taille / ratio proche du carré).
 * Après avoir remplacé le PNG : npm run icons:build
 */
import sharp from 'sharp';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'public', 'favicon.png');

if (!existsSync(src)) {
  console.error('Fichier manquant : public/favicon.png — copiez votre favicon PNG dans public/ puis relancez.');
  process.exit(1);
}

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
  const meta = await sharp(src).metadata();
  console.log(`Source public/favicon.png : ${meta.width}×${meta.height}px (${meta.format}, alpha: ${meta.hasAlpha})`);

  await toSquarePng(48, join(root, 'app', 'icon.png'));
  await toSquarePng(180, join(root, 'app', 'apple-icon.png'));
  await toSquarePng(192, join(root, 'public', 'assets', 'web-app-manifest-192x192.png'));
  await toSquarePng(512, join(root, 'public', 'assets', 'web-app-manifest-512x512.png'));
  console.log('OK : app/icon.png (48), app/apple-icon.png (180), manifest 192 / 512');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
