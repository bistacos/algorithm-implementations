var testString = 'rat tar tar cat tac tac tac act smug mugs gums gums mugs mugs';

// a function that takes a sentence and returns an object whose values are arrays of anagrams
function returnAllAnagrams (string) {
	var returnObj = {};
	var words = string.split(' ');
	var sortedWords = words.map(function (item) {
		return item.split('').sort().join('');
	});

	for (var i = 0, l = sortedWords.length; i < l; i++) {
		for (var j = 0; j < l; j++) {
			// don't check if a word is an anagram of itself
			if (i == j) { continue; }
			// case: anagram
			if (sortedWords[i] == sortedWords[j]) {
				var sortedKey = sortedWords[i];

				// nothing in returnObj at this key yet?
				if (returnObj[sortedKey] == undefined) {
					var tempArr = [];
					// refactor for conciseness
					tempArr.push(words[i]);
					tempArr.push(words[j]);
					returnObj[sortedKey] = tempArr;
				// already at least one value at that key
				} else {
					returnObj[sortedKey].push(words[i]);
					returnObj[sortedKey].push(words[j]);
				}
			} 
		}
	}

	// erase duplicates function (clearest algorithm from the interwebz)
	function eraseDupes (arr) {
    	var seen = {};
    	return arr.filter(function(item) {
        	return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    	});
	}

	// erase duplicates in each array in returnObj
	for (var key in returnObj) {
		returnObj[key] = eraseDupes(returnObj[key]);
	}

	return returnObj;
};

// test
console.log(returnAllAnagrams(testString));