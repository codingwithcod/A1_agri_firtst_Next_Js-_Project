import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    subject:{
        type: String,
        requried:true
    },
    unit:{
        type: String,
        requried:true
    },
    unitId:{
        type: String,
        requried:true
    },
    question:{
        type: String,
        requried:true
    },
    optionA:{
        type: String,
        requried:true
    },
    optionB:{
        type: String,
        requried:true
    },
    optionC:{
        type: String,
        requried:true
    },
    optionD:{
        type: String,
        requried:true
    },
    answer:{
        type: String,
        requried:true
    },
}, 
        {timestamps:true}
);


const QuizModal = mongoose.models.QuizStore || mongoose.model("QuizStore", quizSchema);


export default QuizModal;
