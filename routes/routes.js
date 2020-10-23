const db = require("../models")

module.exports = function (app) 
{
    app.get("/api/workouts", function (req, res) 
    {
        db.Workout.find({})
            .then(function (workouts) {res.json(workouts)})
            .catch(function (err) {console.log(err)})
    })

    app.post("/api/workouts", function (req, res) 
    {
        db.Workout.create({})
            .then(function (workouts) {res.json(workouts)})
            .catch(function (err) {console.log(err)})
    })

    app.get("/api/workouts/range", function(req, res)
    {
        db.Workout.find({}).then(function (workouts) {res.json(workouts)})
        .catch(function (err) {console.log(err)})
    })

    app.put("/api/workouts/:id", function (req, res)
    {
        console.log(req.body)
        db.Workout.where('_id', req.params.id).update({$push: {"exercises": req.body}})
        .then(function(results) {res.json(results)})
        .catch(function (err) {console.log(err)})
    })

};