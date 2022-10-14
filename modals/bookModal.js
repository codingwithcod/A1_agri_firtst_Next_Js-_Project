import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    book_name:{
        type: String,
        requried:true
    },
    auther:{
        type: String,
        requried:true
    },
    desc:{
        type: String,
        requried:true
    },
    full_desc:{
        type: String,
        requried:true
    },
    img:{
        type: String,
        requried:true
    },
}, 
        {timestamps:true}
);


const BookModal = mongoose.models.ReviewBook || mongoose.model("ReviewBook", bookSchema);


export default BookModal;
