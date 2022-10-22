import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        requried:true
    },
    category:{
        type: String,
        requried:true
    },
    post_slug:{
        type: String,
        requried:true,
        unique:true
    },
    home_para:{
        type: String,
        requried:true
    },
    img1:{
        type: String,
        requried:true
    },
    img2:{
        type: String,
    },
    img3:{
        type: String,
    },
    para_1:{
        type: String,
        requried:true
    },
    para_2:{
        type: String,
    },
    para_3:{
        type: String,
    },
   
}, 
        {timestamps:true}
);


const PostModal = mongoose.models.blogPost || mongoose.model("blogPost", postSchema);


export default PostModal;
