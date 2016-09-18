// in this solution I used lodash.js to simplify the code. 

var _ = require('lodash/array');

function is_subset(array, subarray) {
  var intersection = _.intersectionWith(array, subarray);
  
  if (intersection.length != subarray.length) {
    return false;
  }
  return true;
}

// is_subset([5, 2, 6, 7], [7, 2]);
// is_subset([5, 2, 6, 7], [1, 7]);



