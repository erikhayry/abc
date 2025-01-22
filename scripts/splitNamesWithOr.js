const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/api/cocktails/all.json');

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  let cocktails = JSON.parse(data);

  // Split items in 'names' array with " or " into an array
  cocktails = cocktails.map((cocktail) => {
    if (cocktail.ingredients) {
      cocktail.ingredients = cocktail.ingredients.map((ingredient) => {
        if (Array.isArray(ingredient.names)) {
          ingredient.names = ingredient.names.flatMap((name) =>
            name.includes(' or ') ? name.split(' or ') : name,
          );
        }
        return ingredient;
      });
    }
    return cocktail;
  });

  // Write the updated JSON data back to the file
  fs.writeFile(filePath, JSON.stringify(cocktails, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File has been updated');
  });
});
