const fs = require('fs');

// Read the JSON file
fs.readFile('src/app/api/cocktails/all.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  let cocktails = JSON.parse(data);

  // Remove duplicates
  let uniqueCocktails = [];
  let names = new Set();

  for (let cocktail of cocktails) {
    if (!names.has(cocktail.name)) {
      uniqueCocktails.push(cocktail);
      names.add(cocktail.name);
    }
  }

  // Save the updated content back to the same file
  fs.writeFile(
    'src/app/api/cocktails/all.json',
    JSON.stringify(uniqueCocktails, null, 2),
    'utf8',
    (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File has been updated.');
    },
  );
});
