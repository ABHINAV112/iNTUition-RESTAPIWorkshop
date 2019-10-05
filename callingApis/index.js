const fetch = require("node-fetch");

fetch("https://api.exchangeratesapi.io/latest").then(res=>res.json()).then(res=>console.log(res));