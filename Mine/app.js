
const express = require(`express`);
const morgan = require('morgan');
const { json } = require('express/lib/response');

//importing custom library

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(`${__dirname}/../after-section-06/public`));  //defining a public folder for lookup

app.use((req,res,next)=>{
    console.log('hello from middleware');
    next();
});

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});

// app.get('/', (req, res)=>{
//     res.status(200).json({message: `hello form server`,app: 'Natours'});
// });

// //definign first api get route
// app.get('/api/v1/tours',getAllTours);

// //get route for specified id
// app.get('/api/v1/tours/:id',getTour);

// //post route for the api
// app.post('/api/v1/tours', updateTour);

//patch api to improve a given data

// app.patch('/api/v1/tours/:id', (req, res) => {
//     if(req.params.id * 1 > tours.length){
//        return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//        })
//     }
//     res.status(200).json({
//         status: 'success',
//         result: tours.id,
//         data:{
//             tours
//         }
//     })
// })
//app.delete('/api/v1/tours/:id', deleteTour);  //this is not showing as 
//this function is not accessible in this way


/////using middleware for routing


// const tourRouter = express.Router();
// const userRouter = express.Router();

app.use('/api/v1/tours', tourRouter);

//mounting the routers
app.use('/api/v1/users', userRouter);

module.exports = app;

//instead of calling methods like this,w e can simply use this way as well
//this following route is no longer required as we moved them to seperate files

// tourRouter
//     .route('/')
//     .get(getAllTours)
//     .post(updateTour);
//     //and etc

// tourRouter
//     .route('/:id')
//     .get(getTour);
// userRouter
//     .route('/')
//     .get(getAllUsers)
//     .post(createUsers);
//     //and etc

// userRouter
//     .route('/:id')
//     .get(getUsers)
//     .patch(updateUsers)
//     .delete(deleteUsers);