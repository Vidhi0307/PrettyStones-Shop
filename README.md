# PrettyStones-Shop

## Description

Pretty Stone store built with MERN stack using GraphQL,Apollo Client and Server. This store enable three main different flows or implementations:

1. Buyers browse the store categories, products
2. Customers can add the item they want to buy into the Cart and then proceed to checkout.
3. Customers can login back into the website and check their past orders.

- features:
  - Node provides the backend environment for this application
  - Express middleware is used to handle requests, routes
  - Mongoose schemas to model the application data
  - React for displaying UI components
  - Redux to manage application's state

## Database Seed

- The seed command will populate MongoDB with some products,Categories,Users.
- For more information, see code [here](server/config/seed.js)

```
npm run seed
```

## Demo

This application is deployed on Heroku Please check it out :smile: [here](https://pretty-stones-jewel-store.herokuapp.com/).

## Install

Some basic Git commands are:

```
$ git clone https://github.com/Vidhi0307/PrettyStones-Shop
$ cd PrettyStones-Shop
$ npm install
```

Check connection with MongoDB

````

$npm run seed

```

## Setup

```
 Create .env file that include:

  * MONGO_URI & STRIPE_SK (for secret key for Stripe)

```

## Start development

```
$npm run develop
```

## Simple build for production

```
$ npm run build
```


## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)


````
