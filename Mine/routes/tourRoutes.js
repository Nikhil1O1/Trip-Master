const express = require('express');
const tourController = require('./../controllers/tourController');
// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../tours-simple.json`)
// );

const router = express.Router();

router.param('id', tourController.checkId);

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.updateTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;