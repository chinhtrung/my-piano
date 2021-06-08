const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'files')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

let count = 0;
app.get('/the_simple_piano', (req,res)=>{
    count += 1;
    console.log("NEW REQUEST");
    console.log("Count load", count);
    res.render('home', {dirPath: __dirname});
})

app.get('/*', (req,res)=>{
    res.redirect('/the_simple_piano');
})

app.listen(8080, ()=>{
    console.log("Listening on port 8080")
})
