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

/*
Insertion sort: works by bubbling an element to the left until it is
equal to or larger than the element on its left.

Runtime: O(n^2) complexity on unsorted arrays, but O(n) complexity
on sorted or nearly-sorted arrays
*/
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
};

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

/*
Shell sort: first proposed by Donald Shell, may be more easily remembered
as a "gap sort."  It's a variant of the bubble sort or insertion sort that
uses gaps (set manually) to exchange elements that are far apart first, then
use progressively smaller gaps.  It's not used in practice these days and its 
runtime is highly dependent on the gaps used.

Actual average runtime with well-chosen gaps (see 'Hibbard's gap sequence')
is conjectured to be O(N5/4).
*/
function shellSort (a) {
    for (var h = a.length; h = parseInt(h / 2);) {
        for (var i = h; i < a.length; i++) {
            var k = a[i];
            for (var j = i; j >= h && k < a[j - h]; j -= h)
                a[j] = a[j - h];
            a[j] = k;
        }
    }
    return a;
}

// function shellSort (array) {
//   var arr = array;
//   var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

//   for (var gap in gaps) {
//     for (var i = g; i < arr.length; i += g) {
//       var j = i;
//       while (j >= g && arr[j] < arr[j-g]) {
//         swap(arr, j, j-g);
//         j -= g;
//       }
//     }
//   }

//   return arr;
// };
