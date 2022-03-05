import dbConnect from "../../util/mongo";
import User from '../../models/User'
import { useDispatch } from 'react-redux';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "POST"){
      const {email, password} = req.body;
      const secret = process.env.TOKEN
      try {
          const user = await User.findOne({email});
          if(!user) return res.status(404).json('User does not exist')
          const isPassowrdCorrect = await bcrypt.compare(password, user.password)
          if(!isPassowrdCorrect) return res.status(404).json('Invalid Credentials');

          const accessToken = jwt.sign({email: user.email, id: user._id}, secret, {expiresIn: '10h'});
          res.status(200).json({user, accessToken})
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler