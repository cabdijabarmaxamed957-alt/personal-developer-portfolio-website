const fs = require('fs');
const content = fs.readFileSync('src/data/projects.ts', 'utf8');

const eqIndex = content.indexOf('=');
const jsonStart = content.indexOf('[', eqIndex);
const jsonEnd = content.lastIndexOf(']');
const projects = JSON.parse(content.substring(jsonStart, jsonEnd + 1));

console.log('TOTAL:', projects.length);
projects.forEach((p, i) => {
  console.log(`${i+1}. [${p.category}] ${p.slug} -> ${p.images[0]}`);
});
