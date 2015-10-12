// ANAGRAM CHECKER
function anagramChecker (s1, s2) {
	function normalize (str) {
		return str.toLowerCase().split('').sort().join(''); // .trim ? 
	}

	return normalize(s1) == normalize(s2);
}