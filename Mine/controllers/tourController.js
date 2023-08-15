const fs = require('fs');

const tours  = JSON.parse(
    fs.readFileSync(`${__dirname}/../tours-simple.json`)
);

exports.checkBody = (req, res, next)=>{
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status: 'fail',
            message: 'bad request, Missing name or price'
        });
    }
    next();
}

exports.checkId = (req, res, next, val) =>{
    console.log(`tour id is ${val}`);
    if(req.params.id > tours.length){               //for some reason req.params.id is not working saying undefined.
        return res.status(404).json({     //it was working in the same file when it was defined in an indepndent method
             status: 'fail',
             message: 'Invalid ID',        // update : I fixed it as the order of params was res,req,next... instead of req,res
        });
     }
     next();
}

exports.getAllTours = (req, res) =>{
    console.log(req.requestTime);
    res.status(200).json({
        status: 'success',
        requestedAT: req.requestTime,
        result: tours.length,
        data:{
            tours
        }
    })
}

exports.getTour = (req, res) =>{
    console.log(req.params);
    
    //retreiving api and finding it in the json
    const id = req.params.id*1;
    const tour = tours.find(el => el.id === id);

    //testing if given id is valid, very basic way to validate
    res.status(200).json({
        status: 'success',
        result: tours.id,
        data:{
            tours
        }
    })
}

exports.updateTour = (req, res) => {
    const newId = tours[tours.length-1].id+1;
    const newTour = Object.assign({id: newId}, req.body);

    tours.push(newTour);
    fs.writeFile(`${__dirname}/tours-simple.json`,  JSON.stringify(tours), err=>{
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })

    // console.log(req.body);
    // res.send('Done');
}

exports.deleteTour = (req, res) => {
    
    res.status(204).json({
        status: 'success',
        result: 'null',
    })
}