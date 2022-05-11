const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000 ;
const app = express();
// require("dotenv").config() ;


//middelware 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ware hous  management running')
})

app.listen(port, () => {
    console.log("ware hous server running", port)
})