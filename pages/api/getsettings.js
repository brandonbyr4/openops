import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'public')
  const fileContents = await fs.readFile(jsonDirectory + '/settings/settings.json', 'utf8')
  res.status(200).json(fileContents)
}