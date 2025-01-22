const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/api/cocktails/all.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  let cocktails = JSON.parse(data);

  cocktails = cocktails.map((cocktail) => {
    if (cocktail.ingredients === undefined) {
      return cocktail;
    }
    cocktail.ingredients = cocktail.ingredients.map((ingredient) => {
      if (ingredient.name.toLowerCase().includes('glass')) {
        ingredient.amount = ingredient.amount
          ? `${ingredient.amount} ${ingredient.name}`
          : ingredient.name;
        ingredient.name = ingredient.name.replace(/glass(es)?/i, '').trim();
        ingredient.amount = ingredient.amount
          .replace(` ${ingredient.name}`, '')
          .trim();
      }
      return ingredient;
    });
    return cocktail;
  });

  fs.writeFile(filePath, JSON.stringify(cocktails, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File successfully updated');
  });
});
