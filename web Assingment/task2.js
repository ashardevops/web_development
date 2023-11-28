function letterFinder(word, match) {
    let indices = [];
    
    for (let i = 0; i < word.length; i++) {
      if (word[i] === match) {
        indices.push(i);
      }
    }
    
    return indices;
  }
  
  // Example usage:
  let word = "hello";
  let match = "l";
  let result = letterFinder(word, match);
  console.log(`Indices of '${match}' in '${word}':`, result); // Output: Indices of 'l' in 'hello': [2, 3]
  