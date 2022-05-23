const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=75451fd8a836ec43a24c89247b2c41f4&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(`Unable to connect to weather service!`, undefined);
    } else if (body.error) {
      callback(`Unable to find location`, undefined);
    } else {
      callback(undefined, {
        place: body.location.name,
        forecast: body.current.weather_descriptions[0],
      });
    }
  });
};

module.exports = forecast;
