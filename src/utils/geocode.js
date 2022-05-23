const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiY2hyaXNwYXBvdCIsImEiOiJjbDNjNW0yMzMwNWYzM2lvYXl4aWhza3U1In0.L0zQCE6Thghwsk0NddhCTQ";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      callback(undefined, {
        latitude,
        longitude,
        location: body.features[0].place_name,
      });
      // return console.log(`Latitude: ${latitude}\nLongitude: ${longitude}`);
    }
  });
};

module.exports = geocode;
