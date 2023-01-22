const express = require('express');
const app = express();

app.use(express.static('views'));

// app.get('/', (req, res) => {
//     res.send("Welcome to Home Page")
// });

app.listen(8000, () =>{
    console.log('Listening at http://127.0.0.1:8000')
})