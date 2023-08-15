const fs = require('fs');

const tours  = JSON.parse(
    fs.readFileSync(`${__dirname}/../tours-simple.json`)
);

exports.getAllUsers = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

exports.createUsers = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

exports.getUsers = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

exports.deleteUsers = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

exports.updateUsers = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}
