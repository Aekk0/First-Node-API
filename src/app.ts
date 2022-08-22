// Import
import express from "express";
import bodyParser from "body-parser";

// Import interne
import { getUser, getUsers, createUser, deleteUser } from "./controller/user"; 

// Import Middlewares
const middlewares = require("./middleware/giveTime");

// App declaration
const app = express();

// Middlewares called for every routes
app.use(bodyParser.json()); // This one is usefull to use the req.body on POST/PUT requests

app.listen(3000, () => {
    console.log("ok");
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

// Use to fetch/get all users
app.get('/users', middlewares.giveTime, getUsers);

// Use to find a specific User
app.get('/user/:id', getUser);

// Used to create a new User
app.post('/user', createUser);

// Use to delete a existing User
app.delete("/user/:id", deleteUser);