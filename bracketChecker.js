function bracketsMatch () {
	// data to test with
	var data = [ ")(){}", "[]({})", "([])", "{()[]}", "([)]", "()()()()()()[]{}" ];

	var pairs = {
    	'{': '}',
    	'(': ')',
    	'[': ']'
    }
    
	function checkValidParens (a) {
		var a = a;
		var length = a.length;
		if (length % 2 != 0) {
			return false;
		} else if (length == 0) {
			return true;
		} else {
			for (var i = 0, l = length; i < l; i++) {
				/* here's where the function works its magic: any valid set of 
				* parentheses will at some point have a matching pair immediately 
				*  next to each other.  Splice those out, and the same should hold
				* true on the resulting array until it is either not valid or there
				are no further items to check. */
				if ( pairs[a[i]] === a[i+1] ) {
					a.splice(i, 2);
					break;
				}
			}
		}
		return checkValidParens(a);
	}

	// tests the above function with the supplied data
    while (data.length) {
    	var str = data.shift();
    	var pattern = /[a-zA-Z0-9\s]/g; //regex to remove letters, numbers, and spaces
    	var arr = str.replace(pattern, '').split('');
		// logs each return of checkValidParens for debugging
		console.log(checkValidParens(arr));
    }
    return "done!";
}
