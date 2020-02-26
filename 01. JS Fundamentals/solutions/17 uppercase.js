function wordsUppercase(str) {
    let strToUpper = str.toUpperCase();
	
	console.log(strToUpper);

// Do a global search for non-word characters in a string

    let words = strToUpper.split(/\W/);
	
	console.log(words);
	
    words = words.filter(w => w != '');
	
    return words.join(', ');
}

console.log(wordsUppercase('Hi, how are you?'));