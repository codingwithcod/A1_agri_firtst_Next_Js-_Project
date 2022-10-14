import BookModal from "../../../../modals/bookModal";
import connectDb from "../../../../middleware/mongooseCon";

 
const handler = async(req, res) => {

    if(req.method === "POST"){
        try {
            const book = new BookModal(req.body)
            await book.save()
    
            
            res.status(200).json({success:"Book Added succefully"})
            
        } catch (error) {
            console.log(error);
            res.status(200).json({error:"Book Not Added"})
        }

    }else if(req.method === "GET"){

        try {
            const book = await BookModal.find()
            let sortBook = book.sort((a, b)=> {
               return  b.updatedAt - a.updatedAt
            })
            res.status(200).json(sortBook)
            
        } catch (error) {
            res.status(500).json({error:"Enternal server Error"})
            
        }

    }

   
};


export default connectDb(handler);