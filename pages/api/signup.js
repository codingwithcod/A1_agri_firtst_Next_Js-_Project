import User from "../../modals/userModal";
import connectDb from "../../middleware/mongooseCon";
import CryptoJS from "crypto-js";



const handler = async(req, res) => {
    const email = req.body.email;

    if(req.method=="POST"){
        const  userfind = await  User.findOne({email:email});

        if(userfind){
            res.status(200).json({error: "You are registered Already" })

        }else{
            const {name, email, password} = req.body
            let user = new User({name, email, password:CryptoJS.AES.encrypt(password, "secretKey123").toString() })
            await user.save();
    
            res.status(200).json({success: "successful registration" })
        }

       

    }else{
        res.status(400).json({error: "request discard" })

    }

}

export default connectDb(handler)