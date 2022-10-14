import User from "../../../modals/userModal";
import connectDb from "../../../middleware/mongooseCon";
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken';




const handler = async(req, res) => {
    const email = req.body.email;

    if(req.method=="POST"){
        const  userfind = await  User.findOne({email:email});
        console.log(userfind.isAdmin);

        if(!userfind){
            res.status(200).json({success:false, error: "You are Not registered." })
            
        }else{
            if(userfind.isAdmin==false){
                res.status(400).json({success:false, error: "You are Not Admin" })

            }else{

            const bytes = CryptoJS.AES.decrypt(userfind.password, "secretKey123")
            let decryptedPass = (bytes.toString(CryptoJS.enc.Utf8))

                if (decryptedPass== req.body.password) {
                    const token = jwt.sign({email:userfind.email, name:userfind.name}, 'jwtSecret', {
                        expiresIn: '1000'
                    })

                    res.status(200).json({success: "successful admin login", token })
                }
                else{
                    res.status(400).json({error: "Invalid crediantial",  })

                }
            
        }}

       

    }else{
        res.status(400).json({error: "request discard" })

    }

}

export default connectDb(handler);