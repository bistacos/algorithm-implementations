// recursive
function firstFibs () {
	var fibs = [0,1];
	var twoPrev = 0;
	var prev = 1;
	var current;

	function addAndGiveNext (array, previous, twoPrevious) {
		if (array.length >= 100) { return array; }
		current = previous + twoPrevious;
		fibs.push(current);
		twoPrev = previous;
		prev = current;

		return addAndGiveNext(fibs, prev, twoPrev);
	}

	return addAndGiveNext(fibs, prev, twoPrev);
}
