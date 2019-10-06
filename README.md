# REST APIS

_by [Abhinav NB](https://github.com/ABHINAV112) for the iNTUition hackathon_

This workshop features a hands on approach to learning the basics of REST APIs, familiarity with JSON would be required for this workshop.

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

### Different types (write down explanations)

- SOAP
- XML-RPC and JSON-RPC
- REST (becoming more used in modern times, easy to use)

## REST APIs

### Different types of REST requests (write down explanations)

- GET
- POST
- PUT
- DELETE

---

## Installation and Setup

### Postman

![postman logo](images/postman-logo.png)

Postman is a great tool when trying to dissect RESTful APIs made by others or test ones you have made yourself. It offers a sleek user interface with which to make HTML requests, without the hassle of writing a bunch of code just to test an API's functionality.

#### Downloading

##### Installing through the website

Click [here](https://www.getpostman.com/downloads/) to download postman.

##### [Mac installing through Homebrew](https://www.code2bits.com/how-to-install-postman-on-macos-using-homebrew/)

```bash
$ brew cask install postman
```

##### Ubuntu

```bash
$ snap install postman
```

### NodeJS

![node js logo](images/node-js.png)
Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

#### Installation

##### Windows

Installing through [windows installer](https://nodejs.org/en/download/)

##### Mac

Installing through [mac installer](https://nodejs.org/en/download/)

Installing through brew

```bash
$ brew install node
```

##### Linux

Installing through apt-get

```bash
$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```

```bash
$ sudo apt-get install nodejs
```

---

## Calling REST APIs

### Using postman

![home page](images/home.png)

(Start explaining the home page)

### Using a programming language

Every language has the ability to make https requests, using this we can make calls to REST APIs. We shall be using NodeJS for this workshop.

---

## Making REST APIs

### http event listeners

### express

### Deploying
