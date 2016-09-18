// first solution: sort the array, then perform binary search
// the javascript .sort() uses the Quicksort method, with an average complexity of 0(n log(n)) 
// and the complexity of binary search is 0(log(n))


function is_subset(array, subarray) {
  array.sort(compareValues);
  
  for (var i = 0; i < subarray.length; i++) {
    if (!findInArray(array, subarray[i])) {
      return false;
    }
  }
  return true;
}

function findInArray(array, element) {
  var minIndex = 0;
  var maxIndex = array.length - 1;

  while (minIndex <= maxIndex) {
    var currentIndex = (minIndex + maxIndex) >> 1;
    var difference = compareValues(element, array[currentIndex]);

    if (difference > 0) {
      minIndex = currentIndex + 1;
    } else if (difference < 0) {
      maxIndex = currentIndex - 1;
    } else {
      return true;
    }
  }
  return false;
}

function compareValues(a, b) {
  return a - b;
}

module.exports = is_subset;
