const dotenv = require('dotenv');
dotenv.config({path: `${__dirname}/config.env`});

const app = require('./app');
//console.log(process.env.NODE_ENV);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`app running on ${port}...`);
});