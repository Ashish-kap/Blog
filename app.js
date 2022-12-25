const express = require('express')
const viewRoute = require('./routes/viewRoutes.js')
const compression = require('compression')
const path = require('path')
const app = express();
// const AppError = require('./utils/appError');
// const globalErrorHandler = require('./controllers/errorController');


// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression())


app.use('/',viewRoute)

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

// app.use(globalErrorHandler);

module.exports=app;