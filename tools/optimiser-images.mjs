// Convertit les photos brutes en WebP légers pour le site.
//
// Usage :
//   1. Déposer les photos originales (JPG, PNG, HEIC…) dans assets/photos/_originaux/
//   2. npm install   (une seule fois)
//   3. npm run images
//
// Chaque photo ressort dans assets/photos/ en .webp, 1920 px de large maximum.
// Le dossier _originaux/ n'est pas envoyé sur GitHub (trop lourd) : les originaux
// restent sur le Drive de l'asso.

import sharp from "sharp";
import heicConvert from "heic-convert";
import { readdir, stat, readFile } from "node:fs/promises";
import path from "node:path";

const SOURCE = "assets/photos/_originaux";
const SORTIE = "assets/photos";
const LARGEUR_MAX = 1920;
const QUALITE = 80;
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".heic", ".avif"];

const fichiers = (await readdir(SOURCE)).filter((f) =>
  EXTENSIONS.includes(path.extname(f).toLowerCase())
);

if (fichiers.length === 0) {
  console.log(`Aucune photo dans ${SOURCE}/`);
  process.exit(0);
}

for (const fichier of fichiers) {
  const nom = path.parse(fichier).name.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  const entree = path.join(SOURCE, fichier);
  const sortie = path.join(SORTIE, `${nom}.webp`);

  // Les photos iPhone (.HEIC) doivent être décodées avant d'être traitées
  const estHeic = [".heic", ".heif"].includes(path.extname(fichier).toLowerCase());
  const source = estHeic
    ? Buffer.from(await heicConvert({ buffer: await readFile(entree), format: "JPEG", quality: 1 }))
    : entree;

  const info = await sharp(source)
    .rotate() // respecte l'orientation EXIF des photos de téléphone
    .resize({ width: LARGEUR_MAX, withoutEnlargement: true })
    .webp({ quality: QUALITE })
    .toFile(sortie);

  const avant = (await stat(entree)).size / 1024;
  const apres = info.size / 1024;
  console.log(`${fichier} → ${sortie}  ${info.width}×${info.height}  ${avant.toFixed(0)} Ko → ${apres.toFixed(0)} Ko`);
}
