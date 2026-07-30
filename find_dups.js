const fs = require('fs');
let content = fs.readFileSync('src/data/recipes.js', 'utf8');
content = content.replace(/^window\./gm, 'var ');
const fn = new Function(content + '\n return typeof RECIPES !== "undefined" ? RECIPES : [];');
const R = fn();
const seen = {};
R.forEach((r, i) => {
  if (seen[r.image]) {
    console.log('DUP at index', i, r.id, '  same as index', seen[r.image].i, seen[r.image].id);
    console.log('  URL:', r.image);
  } else {
    seen[r.image] = { i, id: r.id };
  }
});
console.log('Done. Total:', R.length, 'Unique images:', Object.keys(seen).length);
