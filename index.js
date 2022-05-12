const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000 ;
const app = express();
// require("dotenv").config() ;


//middelware 
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ld5j5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("products").collection("phone");
  console.log('mongodb connected')
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
    res.send('Ware hous  management running')
})

app.listen(port, () => {
    console.log("ware hous server running", port)
})