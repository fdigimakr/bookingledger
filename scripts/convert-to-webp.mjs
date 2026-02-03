import fg from 'fast-glob'
import path from 'path'
import fs from 'fs/promises'
import sharp from 'sharp'

const ROOT = process.cwd()
const INPUT_DIRS = [path.join(ROOT, 'public'), path.join(ROOT, 'assets')]

const IMAGE_GLOBS = ['**/*.png', '**/*.jpg', '**/*.jpeg']

const IGNORE = ['**/node_modules/**', '**/.next/**']

async function convertFileToWebp(filePath) {
  const outPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  try {
    // Skip if webp already exists and is newer or same mtime
    let skip = false
    try {
      const [srcStat, dstStat] = await Promise.all([fs.stat(filePath), fs.stat(outPath)])
      if (dstStat.mtimeMs >= srcStat.mtimeMs) skip = true
    } catch (_) {}
    if (skip) return { filePath, outPath, status: 'skipped' }

    const img = sharp(filePath)
    await img.webp({ quality: 82 }).toFile(outPath)
    return { filePath, outPath, status: 'converted' }
  } catch (err) {
    return { filePath, outPath, status: 'error', error: err?.message || String(err) }
  }
}

async function main() {
  const perDirFiles = await Promise.all(
    INPUT_DIRS.map((dir) =>
      fg(IMAGE_GLOBS, { cwd: dir, absolute: true, ignore: IGNORE, dot: false, onlyFiles: true })
    )
  )
  const files = perDirFiles.flat()
  if (files.length === 0) {
    console.log('No PNG/JPG images found to convert.')
    return
  }
  console.log(`Converting ${files.length} images to WebP...`)
  const results = await Promise.all(files.map(convertFileToWebp))
  const summary = results.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1
    return acc
  }, {})
  console.log('Done:', summary)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
