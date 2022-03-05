import dbConnect from '../../../util/mongo'
import User from '../../../models/User'
import Workout from '../../../models/Workout'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "GET"){
        const {id} = req.query;
        try {
            const workout = await Workout.findById(id)
            res.status(200).json(workout)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
    if(req.method === "DELETE"){
        const {id} = req.query;
        try {
            const workout = await Workout.findByIdAndDelete(id)
            res.status(200).json('Workout has been deleted...')
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
    
}

export default handler