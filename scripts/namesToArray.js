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

  // Change 'names' field to an array with the string as the only item
  cocktails = cocktails.map((cocktail) => {
    if (cocktail.ingredients) {
      cocktail.ingredients = cocktail.ingredients.map((ingredient) => {
        if (typeof ingredient.names === 'string') {
          ingredient.names = [ingredient.names];
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
