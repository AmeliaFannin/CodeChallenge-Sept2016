// 1. The user name and id of the user with the highest number of followers.

function findMostFollowedUser(pathToJson) {
  var data = require(pathToJson);
  var mostFollowedUser = {followers: 0};

  for (var i in data) {
    if (data[i].user.followers > mostFollowedUser.followers) {
      mostFollowedUser = data[i].user;
    }
  }
  return {id: mostFollowedUser.id, username: mostFollowedUser.username};
}


// 2. The id and user name of the user who posted closest to our office in Boston 
// (GPS coordinates are latitude: 42.356680, longitude: -71.060395)

function findClosestPoster(pathToJson, lat, lon) {
  var data = require(pathToJson);
  var distanceFromOffice = 0;
  var closestPoster = {};

  for (var i in data) {
    var distance = calculateDistance(lat, lon, data[i].location.latitude, data[i].location.longitude);

    if (distance < distanceFromOffice) {
      closestPoster = data[i].user;
    } else if (distanceFromOffice === 0) {
      closestPoster = data[i].user;
    }
  }
  return {id:closestPoster.id, username: closestPoster.username};
}

// Haversine formula, assumes perfectly spherical earth, from stackoverflow

function calculateDistance(lat1,lon1,lat2,lon2) {
  var radius = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var distance = radius * c; // Distance in km
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

 exports.findMostFollowedUser = findMostFollowedUser;
 exports.findClosestPoster = findClosestPoster;