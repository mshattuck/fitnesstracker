
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema
(
    {
        day: 
            {
                type: Date,
                default: () => new Date()
            },
        
        exercises: 
        [{
                type: 
                    {   type: String,
                        trim: true,
                        required: "Enter exercise type"},
                name: 
                    {   type: String,
                        trim: true,
                        required: "Enter exercise name"},
                duration: 
                    {   type: String,
                        trim: true,
                        required: "Enter exercise name"},
                weight:{type: Number},
                reps:{type: Number},
                sets:{type: Number},
                distance:{type: Number}
         }]
    },
    {
        toJSON: {virtuals: true}
    }
);



module.exports = Workout;
