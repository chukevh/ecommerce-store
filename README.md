# Getting Started with ecommerce-store
This project is currently in progress.

*Not all features are working*

A live demo of this project can be found [here](http://kenkyoapparel.com/)


## Available Scripts

Currently this project has two parts:
The frontend server written in ReactJS, and the backend server containing all APIs written in NodeJS. 
Note the backend server connects to a MongoDB database to pull all the data.

In the project directory, you can open up the server folder and run:

### `npm run server`

Runs the backend server in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The server will be ready to make API calls once it is connected to a MongoDB.

The page will reload when you make changes.\
You may also see any lint errors in the console.

This will also load the website and once the backend server has established a connection to the Mongo Database.

**Note**
If you wish to run the project yourself you will need to create and connect to your own database.


## Features in progress

**Website**

Homepage
- Search function
- Check errorElement on each page
  
Shirt detail page
- Implement product descriptions
- Implement reviews

**Server**

Passwords
- Hash user passwords using bcrypt
  
Payment
- Integrate payment





