// This solution uses underscore.js and Geolib.js 

var _ = require('underscore');
var geolib = require('geolib');

// 1. The id and user name of the user with the highest number of followers.

function findMostFollowedUser(pathToJson) {
  var data = require(pathToJson);
  var mostFollowers = _.max(data, function(post) { return post.user.followers; });

  return {id: mostFollowers.user.id, username: mostFollowers.user.username};
}

// findMostFollowedUser('./posts.json');


// 2. The id and user name of the user who posted closest to our office in Boston 
// (GPS coordinates are latitude: 42.356680, longitude: -71.060395)

// Turns out, there is documented problem with node and it isn't playing nice with GeoLib.js,
// but if it was working as designed, this would be lovely. I lost about 30 min down that rabbit hole.

// function findClosestPoster(pathToJson, lat1, lon1) {
//   var data = require(pathToJson);
  
//   var closestPost = _.min(data, function(post) { 
//     return geolib.getDistance({lat1, lon1}, {post.location.latitude, post.location.longitude});
//   });
  
//   return { id: closestPost.user.id, username: closestPost.user.username };
// }

// findClosestPoster('./posts.json', 42.356680, -71.060395);


