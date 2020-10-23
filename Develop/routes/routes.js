const Workout = require('../models/Workout')

module.exports = function(app) 
{
    app.get('/api/workouts', (req, res)=> 
        {
            Workout.find()
                .then(workouts=>{res.json(workouts);})
                .catch(err =>{res.json(err);});
        });

    app.post("/api/workouts", (req, res) => 
        {
            console.log(req.body);
            Workout.create(req.body, (error, data) => 
            {
                if (error){res.send(error);} 
                else {res.send(data);}
            });
        }); 
}
