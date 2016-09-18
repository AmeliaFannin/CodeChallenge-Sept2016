// Basic Tests for subset.js

var is_subset = require('./subset.js');

function assertTrue(param) {
  if (param === true) {
    return true;
  }
  throw new Error(e);
}

function assertFalse(param) {
  var err = 'Expected ' + param + ' to be false';

  if (param === false) {
    return true;
  }
  throw new Error(err);
}

var trueTests = [{
  array: [1, 2],
  subset: [1],
  error: 'sorted array should contain subset'
}, {
  array: [2, 1],
  subset: [1],
  error: 'unsorted array should contain subset'
}, {
  array: [1, 2, 5],
  subset: [2, 2, 5],
  error: 'array should contain subset with repeated values'
}];

var falseTests = [{
  array: [1, 2],
  subset: [3],
  error: 'sorted array does not contain subset'
}, {
  array: [2, 1, 5],
  subset: [5, 3],
  error: 'unsorted array does not contain subset'
}, {
  array: [1, 1, 3],
  subset: [1, 4],
  error: 'array with repeated values does not contain subset'
}];

trueTests.forEach(function(test) {
  try {
    assertTrue(is_subset(test.array, test.subset));  
  } catch (e) {
    throw new Error(test.error + ', failed true test');
  }
});

falseTests.forEach(function(test) {
  try {
    assertFalse(is_subset(test.array, test.subset));
  } catch (e) {
    throw new Error(test.error + ', failed false test');
  }
});

