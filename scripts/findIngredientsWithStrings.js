const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/api/cocktails/all.json');

// Read the JSON data from the file
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Filter cocktails where ingredients are an array of strings
const cocktailsWithStringIngredients = data.filter((cocktail) =>
  cocktail.ingredients?.some((ingredient) => typeof ingredient === 'string'),
);

// Output the result
console.log(cocktailsWithStringIngredients);
