var testArr = [5,2,3,1,4];

// Generic swap function to exchange two elements in an array
function swap (arr, pos1, pos2) {
  var arr = arr, pos1 = pos1, pos2 = pos2, temp;

  temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;

  return arr;
};

/* 
Bubble sort: works by "bubbling" the largest element to the end of
the array, then working its way leftwards to bubble the next-largest
element to the next to last position in the array, etc.

Runtime: O(n^2)
*/
function bubbleSort (array) {
  var arr = array;

  for (var i = arr.length; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[i]) { swap(arr, i, j); }
    }
  }

  return arr;
};

function insertionSort (array) {
  var arr = array;

  for (var i = 1, l = arr.length; i < l; i++) {
    var j = i - 1;
    while (j >= 0 && (arr[j] > arr[j+1])) {
      swap (arr, j, j+1);
      j--;
    }
  }

  return arr;
}

/*
Selection sort: works by iterating through the array, placing
the smallest value at arr[0], the next smallest at arr[1], etc.

Runtime: O(n^2)
*/
function selectionSort (array) {
  var arr = array;
	for (var i = 0, l = arr.length; i < l; i++) {
    for (var j = i+1; j < l; j++) {
      if (arr[i] < arr[j]) { swap(arr, i, j); }
    }
  }

  return arr;
};

