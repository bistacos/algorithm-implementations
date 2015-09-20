var items = [4, 2, 6, 5, 3, 9];

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
function shellSort (arr) {
  for (var g = arr.length; g = parseInt(g / 2);) {
    for (var i = g; i < arr.length; i++) {
      var k = arr[i];
      for (var j = i; j >= g && k < arr[j - g]; j -= g) {
        arr[j] = arr[j - g];
      }
    	arr[j] = k;
    }
  }
    return arr;
}

/*
Quicksort: the ubiquitous divide-and-conquer algorith used in JS
Array.prototype.sort() and V8 on arrays longer than 23 items

For studying purposes, I took a generic quicksort algorithm that uses
the usual partition-and-recursively-sort method and commented along to
help explain how it works.

Runtime: O(nlog(n)) average case, O(n^2) worst case, O(n) best case
*/



function quickSort(items, left, right) {

	// A partitioning function to be used by Quicksort and similar algorithms
	function partition (arr, left, right) { /* parameters: an array of items
	to sort, an index to start the left pointer at, and and index to start
	the right pointer at.
	*/

			var pivot = arr[Math.floor((right + left) / 2)];
			var i = left;
			var j = right;

			// while the left pointer index is less than the right pointer index...
			while (i <= j) {

				// ...and the item there is less than the pivot value
				while (arr[i] < pivot) {
					// increment i
					i++;
				}

				// then, while the value at the right index is greater than
				// the pivot value...
				while (arr[j] > pivot) {
					// decrement j
					j--;
				}

				// as long as i is still less than j, swap the values at arr[i] and
				// arr[j]
				if (i <= j) {
					swap(arr, i, j);
					i++;
					j--;
				}		
			}

			/* return the index up to which the array is partitioned (the last
			 	index of the left pointer) so that we can	recursively do the same 
				thing to the remaining section of the array */
			return i;
	}
		
	var items = items;
  var index;

  // performance optimizer: don't sort the array if 2 or fewer items
  if (items.length > 1) {

  		// auto-supply values for left and right if not supplied (this
  			// makes the function a bit more user-friendly)
      left = typeof left != "number" ? 0 : left;
      right = typeof right != "number" ? items.length - 1 : right;

      // partition: this gradually takes care of the sorting
      index = partition(items, left, right);


      if (left < index - 1) {
      		// index is greater than left pointer, so there are 
      		// still items on the left to be sorted, so quickSort() is 
      		// called recursively on these
          quickSort(items, left, index - 1);
      }

      if (index < right) {
      		// index is still less than right pointer, so there are still
      		// items on the right to be sorted
          quickSort(items, index, right);
      }
  }

  // return all quicksorted items, or (triggering the end of a recursion)
  // just the items themselves if fewer than 2 items
  return items;
}

/* kudos to Nick at
https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
for a lucid step-by-step explanation of the algorithm using JavaScript
*/


