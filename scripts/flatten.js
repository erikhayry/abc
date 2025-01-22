const fs = require('fs');
const path = require('path');

// Function to flatten an array
const flattenArray = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten,
    );
  }, []);
};

// Path to the file
const filePath = path.join(__dirname, '../src/app/api/cocktails/all.json');

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data
  let array;
  try {
    array = JSON.parse(data);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
    return;
  }

  // Flatten the array
  const flattenedArray = flattenArray(array);

  // Write the flattened array back to the file
  fs.writeFile(
    filePath,
    JSON.stringify(flattenedArray, null, 2),
    'utf8',
    (writeErr) => {
      if (writeErr) {
        console.error('Error writing to the file:', writeErr);
        return;
      }
      console.log('File successfully updated with the flattened array.');
    },
  );
});
