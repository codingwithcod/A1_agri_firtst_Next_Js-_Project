import User from "../../modals/userModal"
import connectDb from "../../middleware/mongooseCon";

  const handler = async(req, res) => {

      try {
            if(req.method === "GET"){

                  let users = await  User.find();
                  res.status(200).json(users)

            }
            if(req.method === "DELETE"){
                  const user = await User.findById(req.body)
                  if(user){
                        await  User.findByIdAndDelete(req.body);
                        res.status(200).json({success:"User Deleted Successfully"})

                  }else{
                        res.status(404).json({error:"user not found"})
                  }


            }

            if(req.method === "PUT"){
            
                  const user = await User.findById(req.body.id)
                  console.log(req.body);
                  if(user){

                        
                      
                      if(user.isMember === true){
                            await User.findByIdAndUpdate(req.body.id, {isMember:"false"})
                            res.status(201).json({success:"Now user is not Member "})
                            
                        }else{
                              await User.findByIdAndUpdate(req.body.id, {isMember:"true"})
                              res.status(201).json({success:"Now user is a Member "})

                      }

                  }else{
                        res.status(404).json({error:"user not found"})
                  }

                 

            }
            
      } catch (error) {
            console.log(error);
            res.status(400).json({error:'internal SErver ErroR'})

      }

        
  }




  export default connectDb(handler);    