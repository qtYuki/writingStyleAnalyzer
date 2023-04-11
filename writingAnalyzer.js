const fs = require('fs');

// Load the text file
const text = fs.readFileSync('textfile.txt', 'utf-8');

// Create an object to store the results
const results = {
  totalWords: 0,
  uniqueWords: 0,
  wordFrequency: {},
  sentenceLengths: []
};

// Split the text into words
const words = text.split(/\s+/);

// Loop through each word
words.forEach(word => {
  // Ignore words that are too short or contain non-letter characters
  if (word.length < 3 || !/^[a-zA-ZäöüßÄÖÜ]+$/.test(word)) {
    return;
  }

  // Update the word frequency
  results.totalWords++;
  if (!results.wordFrequency[word]) {
    results.uniqueWords++;
    results.wordFrequency[word] = 1;
  } else {
    results.wordFrequency[word]++;
  }
});

// Calculate the average sentence length
let sentenceLength = 0;
let sentenceCount = 0;
text.split(/[.!?]+/).forEach(sentence => {
  const words = sentence.trim().split(/\s+/);
  if (words.length > 0) {
    sentenceLength += words.length;
    sentenceCount++;
    results.sentenceLengths.push(words.length);
  }
});
const avgSentenceLength = sentenceLength / sentenceCount;

// Output the results
console.log(`Total words: ${results.totalWords}`);
console.log(`Unique words: ${results.uniqueWords}`);
console.log('Word frequency:');
Object.entries(results.wordFrequency).forEach(([word, count]) => {
  console.log(`  ${word}: ${count}`);
});
console.log(`Average sentence length: ${avgSentenceLength}`);
console.log('Sentence lengths:');
console.log(`  min: ${Math.min(...results.sentenceLengths)}`);
console.log(`  max: ${Math.max(...results.sentenceLengths)}`);
