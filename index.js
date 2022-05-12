const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000 ;
const app = express();
require("dotenv").config() ;
const { MongoClient, ServerApiVersion } = require('mongodb');


//middelware 
app.use(cors());
app.use(express.json());


const user = process.env.DB_USER ;
const pass = process.env.DB_PASS ;

console.log(user, pass)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ld5j5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        await client.connect();
        const phoneCollection = client.db('products').collection('phone');

        app.get('/phones', async(req, res) =>{
            const query = {};
            const cursor =  phoneCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);

        })

    }
    finally{
        // await client.close
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Ware hous  management running')
})

app.listen(port, () => {
    console.log("ware hous server running", port)
})