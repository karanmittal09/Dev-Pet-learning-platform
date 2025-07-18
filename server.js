//Declare variables
const express = require("express") //returns a function reference, that function is called with express()
const app = express() //app is an object returned by express();
const PORT = process.env.PORT || 4000; //setting up the listening port
const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose')
// const DevPetQ = require('./models/devpetq') //DevPetQ is where the mongoose models live
require('dotenv').config()//Things we want to keep private such as connection string to mongodb.

let db,
dbConnectionStr = process.env.DATABASE_URL,
dbName = 'DevPet';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then(client => {
      console.log(`Connected to ${dbName} Database`)
      db = client.db(dbName)
  })
  .catch(error => {
      console.error('Failed to connect to MongoDB:', error)
      process.exit(1)
  })

//Set middleware
app.set("view engine", "ejs") //establishing our view engine and ask it to use ejs
app.use(express.static('public')) //Hey Express, if you need files that are client facing, look in public.
app.use(express.urlencoded({extended: true})) //helps validate the right type of data back and forth. Extended: true allows us to send more complex objects like arrays etc.

app.get('/', async (req, res) => {
    const todoItems = await db.collection('DevPetQuestions').find().toArray()
    const itemsLeft = await db.collection('DevPetQuestions').countDocuments()
    res.render('index.ejs', { items: todoItems, left: itemsLeft })
});

app.post('/', (req, res) => {
  db.collection('DevPetQuestions').insertOne(
      {
        category: req.body.category,
        content: req.body.content
      })
  .then(result => {
      console.log('Question Added')
      res.redirect('/')
  })
  .catch(error => console.error(error))
})  






app.listen(PORT, () => console.log(`http://localhost:${PORT}`)) //helps to initialize the server

