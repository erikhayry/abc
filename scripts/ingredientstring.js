const fs = require('fs');
const path = require('node:path');
const filePath = path.join(__dirname, '../src/app/api/cocktails/all.json');

// Read the all.json file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  const cocktails = JSON.parse(data);

  // Filter out cocktails where ingredients is not an array
  const filteredCocktails = cocktails.filter(
    (cocktail) => !Array.isArray(cocktail.ingredients),
  );

  // Write the filtered data to a new JSON file
  fs.writeFile(
    'filtered_cocktails.json',
    JSON.stringify(filteredCocktails, null, 2),
    'utf8',
    (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log(
        'Filtered cocktails have been written to filtered_cocktails.json',
      );
    },
  );
});
