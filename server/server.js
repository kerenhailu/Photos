require('dotenv').config();
require('./DB');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
// const path=require('path');

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>res.send('workkk!'));
// const passport = require('passport');
// const passportMiddleware = require('./config/passport');

// passportMiddleware(passport);

const photosRouter=require('./Routs/Photos/photos-rout');

// app.use('/news', passport.authenticate("jwt",{session:false}),newsRouter)
// app.use(passport.initialize());

 app.use('/photos', photosRouter);

app.listen(process.env.PORT);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//     })
// }
// console.log(process.env.NODE_ENV);

