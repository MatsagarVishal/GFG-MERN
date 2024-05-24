const { Callbacks } = require('jquery');
const request = require('request');

const key = 'b3aaa0b3323c0baab93aff38f75b44cb';
// let api= `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
const getWeather=function(loc,Callbacks){
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}&units=metrics`;
request({
    url: api,
    json: true
}, function (error, response, body) {
    if (error) {
        Callbacks('something went wrong');

    } else {
        Callbacks(body);
        Callbacks(`max tempreture is ${body.main.temp} in ${body.name} and speed is ${body.wind.speed}, humidity is ${body.main.humidity}`);
    }
})
}

module.exports=getWeather;