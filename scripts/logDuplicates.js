const fs = require('fs');

// Read the JSON file
const data = JSON.parse(
  fs.readFileSync('src/app/api/cocktails/all.json', 'utf8'),
);

// Extract names
const names = data.map((cocktail) => cocktail.name);

// Find duplicates
const duplicates = names.filter((name, index) => names.indexOf(name) !== index);

if (duplicates.length > 0) {
  console.log('Duplicate names found:', duplicates);
} else {
  console.log('No duplicate names found.');
}
