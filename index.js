const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', (req,res)=>{
    console.log("NEW REQUEST");
    res.render('home', {dirPath: __dirname});
})

app.get('/*', (req,res)=>{
    res.redirect('/');
})

app.listen(1234, ()=>{
    console.log("Listening on port 1234")
})
