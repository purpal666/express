import fetch from'node-fetch';
import https from'https';
import express from 'express'
const app = express()
let server = app.listen(8080, function() {
    console.log('Server is listening on port 8080')
});

app.get('/submit', (req, res) => {
// var city= "SEATTLE"
// var state= "WA"
// var street1="325 9TH AVE".replace(/%20/g, " ")
// var street2="".replace(/%20/g, " ")
// var zip="98104"
// var clinic="HARBORVIEW MEDICAL CENTER".replace(/%20/g, " ")
// var dea="FB1882821"
// var email="hannahburner@yandex.com"
// var fax=getRandomInt()
// var first_name ="Sanjay".replace(/%20/g, " ")
// var last_name="Bhananker".replace(/%20/g, " ")
// var npi ="1427134220"
// var password ="Deshmukh01"
// var phone="(206) 731-3059"
console.log(req.query.clinic)
const body = `api_prescriber%5Bclinic_attributes%5D%5Baddress_attributes%5D%5Bcity%5D=${req.query.city}&api_prescriber%5Bclinic_attributes%5D%5Baddress_attributes%5D%5Bstate%5D=${req.query.state}&api_prescriber%5Bclinic_attributes%5D%5Baddress_attributes%5D%5Bstreet%5D=${req.query.street1}&api_prescriber%5Bclinic_attributes%5D%5Baddress_attributes%5D%5Bstreet2%5D=${req.query.street2}&api_prescriber%5Bclinic_attributes%5D%5Baddress_attributes%5D%5Bzip%5D=${req.query.zip}&api_prescriber%5Bclinic_attributes%5D%5Bname%5D=${req.query.clinic}&api_prescriber%5Bdea%5D=${req.query.dea}&api_prescriber%5Bemail%5D=${req.query.email}&api_prescriber%5Bfax%5D=%28${req.query.fax}&api_prescriber%5Bfirst_name%5D=${req.query.first_name}&api_prescriber%5Blast_name%5D=${req.query.last_name}&api_prescriber%5Bnpi%5D=${req.query.npi}&api_prescriber%5Bpassword%5D=${req.query.password}&api_prescriber%5Bphone%5D=%28${req.query.phone}`;

var headers = {
            "Host": "getrx.com",
"Content-Type": "application/x-www-form-urlencoded",
"Accept-Encoding": "gzip, deflate, br",
"Accept": "*/*",
"User-Agent": "GetRX Prescriber/1.0.54 (iPad; iOS 15.0; Scale/2.00)",
"Accept-Language": "en-US;q=1"
          }
          const httpsAgent = new https.Agent({
                rejectUnauthorized: false,
              });
               (async () => {

          const response = await fetch("https://getrx.com/api/prescribers", {
            proxy:'http://scraperapi:0438a32828500fc8294dfbf95cba4049@proxy-server.scraperapi.com:8001',
                      method: "POST",
                      headers: headers,
                      body: body,
                      agent: httpsAgent

                    });

                    const data = await response.json();
                    console.log(data)
res.send(data)
                  })();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
})
