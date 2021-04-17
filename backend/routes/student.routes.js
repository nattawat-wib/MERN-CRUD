let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

let studentSchema = require('../models/Student');

// create students
router.route('/create-student').post((req, res, next) => {
    studentSchema.create(req.body, (error, data) => {
        if (error) return next(error);

        console.log(data);
        res.json(data)
    })
})

// get student
router.route('/').get((req, res, next) => {
    studentSchema.find((error, data) => {
        if (error) return next(error);

        res.json(data)
    })
})

// get single student
router.route('/edit-student/:id').get((req, res, next) => {
    studentSchema.findById(req.params.id, (error, data) => {
        if (error) return next(error);

        res.json(data)
    })
})

// update student
router.route('/update-student/:id').put((req, res, next) => {
    studentSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
        if (error) return next(error);

        res.json(error)
        console.log('student update successfully');
    })
})

// delete student
router.route('/delete-student').delete((req, res, next) => {
    studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) return next(error);

        res.status(200).json({
            msg: data
        })
    })
})

module.exports = router