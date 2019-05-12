
# SMS-management-App# 

Link to hosted app: [sms-management-app](https://random-phone-number-generatorr.herokuapp.com/)

The sms management application (strictly API) is an application that simulates a system of how sms is managed between different Contact on a platform.


## Install
```bash
npm install 
```
## Features
* Contact can see all sms
* Contact can send sms to other Contact
* Contact can can see all sent sms
* Contact can receive sms from other Contact
* Contact can see all received sms
* Contact can delete sms
* Contact can delete contacts and all sms associated with the contact


###Setup

* Clone the repository
* Checkout to the `develop` branch
* Run `npm i` to install all dependencies
* Add a mongodb url to your `.env` file(see .env.exapmle file).
* Run `npm start:dev` to start the app locally
* Go to `localhost:8888` to access end points.
* Run all tests and coverage using `npm run test a`

## API endpoints and functions

 

Type of request | route(endpoint)       | Description
----------------| ----------| --------------------
POST     |api/v1/contact|Create a new contact
GET      |api/v1/contacts|Get all contacts
GET      |api/v1/:contactId|Get single contact
PUT      |api/v1/:contactId|Update single contact
DELETE   |api/v1/:contactId|Delete single contact
POST     |/api/v1/sms|Create a new message
GET      |/api/v1/sms/allmessages|Get all messages
GET      |/api/v1/sms/sent/:phoneNumber|Get sent sms
GET      |/api/v1/sms/received/:phoneNumber|Get received sms
