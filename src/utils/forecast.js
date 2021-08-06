const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f37a67b3fead269ac1436ef766d924c2&query='+latitude+' , '+longitude+'&units=f'
    request({url, json:true}, (error, {body}  = {}) => {
        if (error) {
            callback('Unable to connect weather services!',undefined)
        } else if(body.error){
            callback('Unable to find location, Try another search',undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' + ' It is ' + body.current.cloudcover + '% cloudy and ' + body.current.humidity + '% humid.')
        }
    })
}

module.exports= forecast