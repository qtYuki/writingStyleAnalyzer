// Load in the results of the previous program for the two texts
const text1Results = require('./text1_results.json');
const text2Results = require('./text2_results.json');

// Calculate the difference between the two texts' results for each metric
const wordLengthDiff = Math.abs(text1Results.avgWordLength - text2Results.avgWordLength);
const sentenceLengthDiff = Math.abs(text1Results.avgSentenceLength - text2Results.avgSentenceLength);
const punctuationDiff = Math.abs(text1Results.punctuationFreq - text2Results.punctuationFreq);

// Calculate a total difference score between the two texts
const totalDiff = wordLengthDiff + sentenceLengthDiff + punctuationDiff;

// Calculate a percentage similarity score based on the total difference score
const similarityPercentage = Math.max(0, 100 - totalDiff);

// Print out the similarity percentage
console.log(`The two texts are ${similarityPercentage}% similar in writing style.`);
