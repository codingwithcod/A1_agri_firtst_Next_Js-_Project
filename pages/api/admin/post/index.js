import PostModal from "../../../../modals/postModal";
import connectDb from "../../../../middleware/mongooseCon";

 
const handler = async(req, res) => {

    if(req.method === "POST"){

        try {
            const slug = await PostModal.findOne({post_slug:req.body.post_slug})
            
            if(slug){
                res.status(401).json({error:"Post slug must be unique !"})

            }else{
                const post = new PostModal(req.body)
                await post.save()
                res.status(200).json({success:"Post Added succefully"})
            }
    
            
            
        } catch (error) {
            console.log(error);
            res.status(200).json({error:"Post Not Added"})
        }

    }else if(req.method === "PUT"){
        try {
            const slug = await PostModal.findOne({post_slug:req.body.post_slug})

            if(slug){
                res.status(401).json({error:"Post slug must be unique !"})

            }else{
                const {_id, ...restAll} = req.body; 
                await PostModal.findByIdAndUpdate(_id, restAll)
        
                res.status(200).json({success:"Post Edited succefully"})
            }
            
            
        } catch (error) {
            console.log(error);
            res.status(200).json({error:"Post Not Edited"})
        }

    } else if(req.method === "DELETE"){
        try {
            const id = req.body;

            await PostModal.findByIdAndDelete(id)
            res.status(200).json({success:"Post Deleted"})

        } catch (error) {
            console.log(error);
            res.status(200).json({error:"Post Not Deleted"})
        }

       

    }else if(req.method === "GET"){

        try {
            const post = await PostModal.find()
            let sortBook = post.sort((a, b)=> {
               return  b.updatedAt - a.updatedAt
            })
            res.status(200).json(sortBook)
            
        } catch (error) {
            res.status(500).json({error:"Enternal server Error"})
            
        }

    }

   
};


export default connectDb(handler);