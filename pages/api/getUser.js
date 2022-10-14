import User from "../../modals/userModal"
import connectDb from "../../middleware/mongooseCon";

  const handler = async(req, res) => {
        let users = await  User.find();

        res.status(200).json({users})
  }

  export default connectDb(handler);    