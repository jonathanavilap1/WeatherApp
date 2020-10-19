const fetch = require("node-fetch");
//first test for lambda function
module.exports.getWeather = (event, context, callback) => {

    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=Zapopan,JA,MX&appid=${process.env.APPID}&units=metric`;

    fetch(endpoint)
    .then( res => res.json() )
    .then( body =>  {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*",
        },
        body: JSON.stringify({ temperature: body.main.temp })
      };

      callback(null, response);
    });
};