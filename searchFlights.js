
const request = require('request')
const cheerio = require('cheerio')
const json = require('json')


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
        $('p').each(function (i, e) {
            var details = $(this)
            var showDetails = details.text();

            let flightList = []

            if (showDetails.includes(origin) == true && showDetails.indexOf(origin) < 3) {
                if (showDetails.includes(destination) == true && showDetails.indexOf(destination > 3)) {
                    flightList.push(showDetails)
                    // for (var i = 0; i < flightList.length; i++) {
                    //         if (flightList[i] !== flightList[i+1]) {
                    //             var temp = []
                    //             temp.push(flightList[i])
                    //         }
                    //         console.log(temp)
                    // }
                    let formatList = flightList.toString()
                        .replace("[", "")
                        .replace("]", "")
                    console.log(formatList)
                }
            }           
        })
    })
}

flights()