const countWordOccurrences = (sentence: string, word: string): number => {
  const lowerSentence = sentence.toLowerCase();
  const lowerWord = word.toLowerCase();
  const wordArray = lowerSentence.split(" ");
  return wordArray.filter((w) => w === lowerWord).length;
};

