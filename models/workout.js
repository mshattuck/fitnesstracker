
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
    //includes virtual properties
    {
        toJSON: {virtuals: true}
    }
);

//adds dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function()
{
    return this.exercises.reduce((total, exercise) => 
         {return total + exercise.duration}, 0);  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
