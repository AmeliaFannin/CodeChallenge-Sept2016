// Basic Tests for userdata.js

var userFunctions = require('./userdata.js');

function assertTrue(param, result) {
  if (param.id === result.id) {
    return true;
  }
  throw new Error(e);
}

function assertFalse(param, result) {
  if (param.id != result.id) {
    return true;
  }
  throw new Error(err);
}

var trueTests = [{
  testFunction: userFunctions.findMostFollowedUser('./test_posts.json'),
  result: {id: '2624519736035738987', username: 'paula_gordon'},
  error: 'username: paula_gordon should have most followers'
}, {
  testFunction: userFunctions.findClosestPoster('./test_posts.json', 42.356680, -71.060395),
  result: {id: '3941525609476922650', username: 'thomas_riley'},
  error: 'username: thomas_rileys post should be closest to office'
}];

var falseTests = [{
  testFunction: userFunctions.findMostFollowedUser('./test_posts.json'),
  result: {id: '3941525609476922650', username: 'thomas_riley'},
  error: 'username: thomas_riley should not have most followers'
}, {
  testFunction: userFunctions.findClosestPoster('./test_posts.json', 42.356680, -71.060395),
  result: {id: '2624519736035738987', username: 'paula_gordon'},
  error: 'username: paula_gordon post should be not be closest to office'
}];

trueTests.forEach(function(testCase) {
  try {
    assertTrue(testCase.testFunction, testCase.result);  
  } catch (e) {
    throw new Error(testCase.error + ', failed test');
  }
});

falseTests.forEach(function(testCase) {
  try {
    assertFalse(testCase.testFunction, testCase.result);  
  } catch (e) {
    throw new Error(testCase.error + ', failed test');
  }
});

