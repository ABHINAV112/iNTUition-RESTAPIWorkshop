# REST APIS

_by [Abhinav NB](https://github.com/ABHINAV112) for the iNTUition hackathon_

This workshop features a hands on approach to learning the basics of REST APIs. You will learn the types of REST APIs, the components of requests and responses, how to call a REST API and make your very own rest APIs. Familiarity with [JSON](https://www.w3schools.com/whatis/whatis_json.asp), and the [command line interface](https://tutorial.djangogirls.org/en/intro_to_command_line/) will aid you in this workshop.

## ![iNTUition-logo](images/logo.jpeg)

---

## Installation and Setup

We will need the following tools going on with the workshop, the installation procedures are as follows

### Postman

![postman logo](images/postman-logo.png)

Postman is a great tool when trying to dissect RESTful APIs made by others or test ones you have made yourself. It offers a sleek user interface with which to make HTML requests, without the hassle of writing a bunch of code just to test an API's functionality.

#### Downloading

##### Installing through the website (recommended for windows and mac)

Click [here](https://www.getpostman.com/downloads/) to download postman.

##### [Mac installing through Homebrew](https://www.code2bits.com/how-to-install-postman-on-macos-using-homebrew/)

```bash
$ brew cask install postman
```

##### Ubuntu installing through snap (recommended for ubuntu)

```bash
$ snap install postman
```

### NodeJS

![node js logo](images/node-js.png)
Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux. We will be using nodejs here to show you how to call these APIs.

#### Installation

Windows

Click the following link to install through [windows installer](https://nodejs.org/en/download/)

Mac

Click the following link to install through [mac installer](https://nodejs.org/en/download/)

Installing through brew, run the following command in your bash terminal

```bash
$ brew install node
```

Linux

Installing through apt-get, run the following commands in your bash terminal

```bash
$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```

```bash
$ sudo apt-get install nodejs
```

---

## Introduction

API stands for Application Programming Interface. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your **request** to the provider that you’re requesting it from and then delivers the **response** back to you. Click [here](https://www.youtube.com/watch?v=s7wmiS2mSXY&t=1s), to see a nice video explaining APIs.

### [Types of APIs](https://ffeathers.wordpress.com/2014/02/16/api-types/)

APIs are classified broadly based on the types of interactions they allow to make. For instance if you want to interact with hardware, you could use a hardware API. These are some of the major classifications:

- Web Service APIs
- WebSocket APIs
- Library based APIs
- Class-based APIs
- OS functions and routines
- Object remoting APIs
- Hardware APIs

---

## Web Service APIs

A type of API which provides access to its service via a **URL**. Requests are made to a server, the server then processes the information in the request and sends back a response.

### Different types

<!-- TODO: (write down explanations) -->

- SOAP
- XML-RPC and JSON-RPC
- REST (becoming more used in modern times, easy to use)

---

## Types of REST APIs

Conventionally, REST APIs fall under into 4 different types of categories. These categories are important during the implementation of an API as they are a component of the request. An API maybe classified based on the following information, however sometimes an API of a certain type may not perform the function stated below. For example, a POST API maybe used to retrieve data from a server. The following are very loose definitions needed to establish a convention for making APIs. Their implementation is completely dependent on the creator. For the rest of the content, API and REST API shall be used interchangeably.

### GET

This type of API which is used to retrieve information of a record from the server, the main data to be processed is recieved from parameters and the URL.

### POST

This type of API which is used to create a new record in the server, the data to be processed is sent primarily through a body of data in the request.

### PUT

This type of API which is used to update existing values of a record in the server, the data to be processed is sent through a mixture of parameters and body.

### DELETE

This type of API which is used to delete a record from a server, the data to be processed is sent through a mixture of parameters and body.

## Components of REST API requests(JSON)

This section describes the format of data which should be sent to the server while making an API call(reqest structure). We are covering only JSON requests in this workshop, the following are the key-value attributes which will be sent to the server.

### Url

The http/https address referring to the API hosted on the web(can also be done through a local host).

```javascript
  "url": "https://bestjeanist.sandbox.arcadier.io/api/v2/users/",
```

### Parameters

The URL may contain some additional information which can be used by the server.

```javascript
  "url": "https://bestjeanist.sandbox.arcadier.io/api/v2/users/key=128'"
```

The parameter here is key.

### Method

Indicates the type of API being used, whether it is GET, POST, PUT or DELETE.

```javascript
  "method": "POST"
```

### Headers

Stores important meta data, describing the data of the response being sent to the server. The server reads this data and decides in what manner the rest of the data is to be processed.

```javascript
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer 78bb6ee7-38df-4940-b2cf-1bfa12cbbade",
    "cache-control": "no-cache"
  },
```

There are several header tags which can be used, click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) to find out more about them.

### Data/Body

This is the body of data sent to the server inside the request, this data will be processed by the server and a response will be sent back.
<br>
NOTE: json can be stringified while sending to the server, it can also be sent raw

```javascript
  "data": "{\n  \"ItemDetail\": {\n    \"ID\": \"00000000-0000-0000-0000-000000000000\"\n  },\n  \"Quantity\": 0,\n  \"Notes\": \"string\",\n  \"CartItemType\": \"string\"\n}"
```

## Components of REST API responses

This section describes the format of data which is recieved after making an API call, the response has 2 important components.

### Status

The status is a number sent by the server. This number describes whether the API call was succesful or not, if the API call was not succesful it tells you what error went on.

Some common codes are

```
200 - success
400 - bad request
401 - unauthorized
403 - forbidden
404 - error not found
500 - internal server error
```

Click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for a list of all the codes.

### Body

The body contains the information processed by the server, this is the information you will use to perform your computation and manipulations. The structure of the body is completely dependent on the creator of the API, his documentation will tell you more about the

---

## Calling REST APIs

### Using postman

The home page of the entire postman application.<br>
![home page](images/home.png)<br>

#### Type of request

Helps you select the type of request you make to the server.<br>
![api request type selector](images/postman/type.png)<br>

#### URL entry field

To enter the URL related to the REST API.<br>
![box for URL](images/postman/url.png)<br>

#### Collections

You can save multiple related APIs into a collection over here.<br>
![Collections](images/postman/collection.png)<br>

#### Params

You can enter the params which are going to be inside the URL<br>
![Params](images/postman/params-section.png)<br>
Changes being made into the URL<br>
![Params-Url](images/postman/params-url.png)<br>

#### Authorization

Over here, you can indicate what type of authorization the API uses. You can also pass in an authorization key.<br>
![Authorization](images/postman/authorization.png)<br>

#### Headers

Headers can be entered here to describe what type of content is being passed through.<br>
![Headers](images/postman/headers.png)<br>

#### Body

The body here indicates what kind of content is being sent in the request, the server has access to this content and does its operating based on the content.<br>
![Body](images/postman/body.png)<br>

#### Code (Very useful)

![Code button](images/postman/code-button.png)<br>
You can use the code button to generate code which calls the API with the exactly same values<br>
![Code generated](images/postman/generated-code.png)

### Using a programming language

Every language has the ability to make https requests, using this we can make calls to REST APIs. We shall be using NodeJS for this workshop.

NodeJS uses several libraries to make calls to APIs.

#### Setting up a directory

First setup the project directory you wish to make your javascript files in.

```bash
$ mkdir callingApis
$ cd callingApis
$ touch index.js
```

Then make it an npm directory

```bash
$ npm init -y
```

To install the required npm modules run the following

```bash
$ npm install --save request
```

#### Making the API call

Using Postman to generate the code

1. Go into the postman and the API you wish to call, click the code button. This should generate code to call the API.
2. Select NodeJS, and copy paste the code into the index.js file.

Creating your own code

1. Make a variable called settings which is a json containing the following fields

```javascript
var settings = {
  url: "",
  headers: {},
  data: "",
  method: ""
};
```

2. Fill in these fields with the required information in order to make the call.
3. Now you can call the API by

```javascript
request(settings,function(res){
  ...
});
```

4. The function is a callback, which is called after the API has been called. "res has the body of the response"

#### Finally

Run the code by doing

```bash
$ node .
```

---

## Making REST APIs

This section shall teach you how to make your own APIs, using NodeJS and a library called [ExpressJS](https://expressjs.com/).

### Setting up a directory

First setup the project directory you wish to make your javascript files in.

```bash
$ mkdir makingApis
$ cd makingApis
$ touch index.js
```

Then make it an npm directory

```bash
$ npm init -y
```

To install the required npm modules run the following

```bash
$ npm install --save express body-parser
```

### Making your own basic express Apis

#### Setting up the basic express http handler

```javascript
const express = require("express");
const app = express();
```

#### Setting up your http request handlers

These handlers respond to cases when a particular url is called, using the app variable created above is used to handle get, post, put and delete requests. Whenever an API call is made to the URL, these send back responses to the caller.

GET

```javascript
app.get("/data/:value", function(req, res) {
  ...
});
```

POST

```javascript
app.post("/data", function(req, res) {
  ...
});
```

PUT

```javascript
app.put("/data/:value", function(req, res) {
  ...
});
```

DELETE

```javascript
app.delete("/data/:value", function(req, res) {
  ...
});
```

Use the following code to send a response to the caller of the API

```javascript
res.send(response);
```

where response is a string or JSON, of the processed data.<br>
NOTE: remember to return from a http request handler

#### Using middleware

Middle ware are used with every API call, but they do not send back any responses to the user. Here, we wil be using bodyParser middle ware which parses the json body of incoming responses.

```javascript
const bodyParser = require("body-parser");
app.use(bodyParser.json());
```

#### listening on a local host

Run the following command to start listening to https requests on a localhost 3000.

```javascript
app.listen(3000);
```

#### Finally

Run the code by doing

```bash
$ node .
```

## Additional Information

### Deploying

Now that you know how to make a simple express REST API, you can deploy them onto the internet through an online hosting service. Feel free to checkout [firebase functions](https://firebase.google.com/docs/functions/http-events), showing you how to deploy your custom APIs onto the internet.

### CORS

Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. While making or calling APIs, it is important to take CORS into consideration as often you may not be able to make a cross domain API call. Express has [middleware](https://www.npmjs.com/package/cors) to enable you to make cross domain API calls.

### Public APIs

In order to get realtime information or process data on servers online, we use public APIs. For instance, if you wish to get a report of current weather or get information on exchange rates. A public API ensures that your application will remain dynamic. Most APIs are well documented, the documentation of these APIs contain information on the components of the request and the structure of the response sent back. Click [here](https://github.com/public-apis/public-apis) for a list of free to use public APIs which may benefit you in making your hack.
