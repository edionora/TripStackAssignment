
const request = require('request')
const cheerio = require('cheerio')
const json =require('json')
//node searchFlights -o YYZ -d YYC
// argumnts 3 and 5

var origin = process.argv[3]
console.log(origin)
var destination = process.argv[5]
console.log(destination)


function flights() {
    let server = {
        url: 'http://localhost:8000/',
        method: 'GET'
    }
    request(server, (error, response, body) => {
        const $ = cheerio.load(body);
        $('div.info').each(function(i,e){
            var details = $(this)
            var showDetails = details.text();
            
            //console.log(showDetails)
            for (var i = 0; i < showDetails.length; i++){
                if (showDetails[i].includes(origin) == true && showDetails[i].includes(destination) == true)
                {
                    console.log(showDetails[i].flights)
                }
            }
        })
    })
}

flights()