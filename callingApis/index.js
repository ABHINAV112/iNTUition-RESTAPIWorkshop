var request = require("request");

var options = {
  method: "GET",
  url: "https://cat-fact.herokuapp.com/facts",
  headers: {
    "cache-control": "no-cache",
    Connection: "keep-alive",
    "Accept-Encoding": "gzip, deflate",
    Host: "cat-fact.herokuapp.com",
    "Postman-Token":
      "d6edc195-48ab-492c-bd41-0d54cd6339a0,39addca0-754d-4c03-a438-e996453fda9f",
    "Cache-Control": "no-cache",
    Accept: "*/*",
    "User-Agent": "PostmanRuntime/7.18.0"
  }
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
