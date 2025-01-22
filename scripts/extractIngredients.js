const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, '../data/all.json');

// Function to split ingredient into amount and name
function splitIngredient(ingredient) {
  const regex = /^(\d+\/\d+|\d+(\.\d+)?|\d+)?\s*(.*)$/;
  const match = ingredient.match(regex);
  if (match) {
    return {
      amount: match[1] || '',
      name: match[3].trim(),
    };
  }
  return {
    amount: '',
    name: ingredient,
  };
}

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  let cocktails = JSON.parse(data);

  // Iterate through each cocktail and its ingredients
  cocktails.forEach((cocktail) => {
    if (Array.isArray(cocktail.ingredients)) {
      cocktail.ingredients = cocktail.ingredients.map(splitIngredient);
    } else if (typeof cocktail.ingredients === 'object') {
      cocktail.ingredients = Object.entries(cocktail.ingredients).map(
        ([name, amount]) => ({
          amount: amount,
          name: name,
        }),
      );
    }
  });

  // Write the updated JSON back to the file
  fs.writeFile(filePath, JSON.stringify(cocktails, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File updated successfully.');
  });
});
