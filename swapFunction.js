// generic swap function to be used in sorting algorithms

var swap = function (arr, pos1, pos2) {
	var arr = arr, pos1 = pos1, pos2 = pos2, temp;

  temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;

  return arr;
};
