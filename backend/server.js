require('dotenv').config();
const express =  require('express');
const router =  require('./routes')
const DbConnect = require('./database');

const app = express();
const PORT =  process.env.PORT || 5500;
DbConnect();
app.use(express.json());

app.use(router);

app.get('/',(req,res) =>{
    res.send("Hello")
})

app.listen(PORT, () =>{
    console.log(`Listining on port ${PORT}`)
})


