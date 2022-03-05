import dbConnect from '../../../util/mongo'
import User from '../../../models/User'
import Workout from '../../../models/Workout'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "GET"){
        const {user} = req.query;
        try {
            const workouts = await Workout.find({user: user._id})
            res.status(200).json(workouts)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
    if(req.method === "POST"){
      const {title, type, exercises} = req.body;
      const {user} = req.query;
      try {
          const workout = await Workout.create({
              title,
              type,
              exercises,
              user: user._id
          })
          res.status(200).json(workout)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler