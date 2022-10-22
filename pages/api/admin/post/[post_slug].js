import PostModal from "../../../../modals/postModal";

export default async (req, res) => {

    try {
        const {post_slug} = req.query;
        const post = await PostModal.findOne({post_slug})
        if(post){
            res.status(200).json(post, {error:false})
        }else{
            res.status(200).json({error:true})
        }
        
    } catch (error) {
        console.log(error);
    }
}