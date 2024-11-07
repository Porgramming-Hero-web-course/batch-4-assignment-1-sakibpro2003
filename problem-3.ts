const countWordOccurrences =(sentence: string, word: string)=>{
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    const wordArray = lowerSentence.split(' ');
    console.log(wordArray)
    return wordArray.filter(w=>w===lowerWord).length;
}
// const res = countWordOccurrences('i love me me', 'me')
// console.log(res)