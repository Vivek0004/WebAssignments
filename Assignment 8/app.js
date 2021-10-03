if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
var flash = require('connect-flash');
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const email = require('./emails');
//Environment variables
const port = process.env.PORT || 3000;

//mongo connecting
// mongoose.connect(process.env.MONGO_URL).then(() => {
//     console.log('DB Connected')
// }).catch((err) => {
//     console.log(err);
// });

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(flash())


app.post('/',jsonParser ,async (req, res) => {
    
   
    email.welcomeEmail(req.body.email, req.body.name)
    //res.send(req.body);
    res.render('welcome/welcome.ejs');
});

app.get('/', (req, res) => {
    
    //res.send(req.body);
    res.render('auths/index');
});




app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})