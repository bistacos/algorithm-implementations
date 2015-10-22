// function that outputs the number of perfect squares within a given range
// between positive integers A <= B

function perfectSquares (A,B) {
	var perfs = [];


	var lowestSqrt = Math.sqrt(Math.min(Math.abs(A), Math.abs(B)));
	var highestSqrt = Math.sqrt(Math.max(Math.abs(A), Math.abs(B)));

	function getPerfs () {
		for (var i = lowestSqrt; i <= highestSqrt; i++) {
			perfs.push(i*i);
		}
	}
	getPerfs();

	return perfs.length;
}