const fs = require('fs');
const path = require('path');

const folderPath = 'data';
const outputFile = 'all.json';

const mergedData = [];

console.log('Starting to read directory:', folderPath);

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log('Files found:', files);

  files.forEach((file) => {
    if (path.extname(file) === '.json') {
      const filePath = path.join(folderPath, file);
      console.log('Processing file:', filePath);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (Array.isArray(data)) {
        mergedData.push(...data);
      } else {
        mergedData.push(data);
      }
    }
  });

  console.log('Writing merged data to:', outputFile);
  fs.writeFileSync(outputFile, JSON.stringify(mergedData, null, 4), 'utf8');
  console.log('Merged JSON saved to', outputFile);
});

console.log('Script execution completed.');
