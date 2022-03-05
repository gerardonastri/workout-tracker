import dbConnect from "../../util/mongo";
import User from '../../models/User'
import bcrypt from 'bcrypt'

//register
const handler =  async (req,res) => {
    await dbConnect()
    if(req.method === 'POST'){
        const {username, email, password} = req.body;
        try {
            console.log(req.body);
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = await User.create({
                email,
                password: hashedPassword, 
                username: username
            });
            
            res.status(200).json({newUser})
        } catch (error) {
            res.status(500).json(error.message)
            console.log(error);
        }
    }
};
export default handler