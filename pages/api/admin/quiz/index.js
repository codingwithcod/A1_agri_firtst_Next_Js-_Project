import QuizModal from '../../../../modals/quizModal';
import connectDb from '../../../../middleware/mongooseCon'




const handler = async(req, res) => {

    if(req.method === "POST"){
        try {
            const quiz = new QuizModal(req.body)
            await quiz.save()
    
            
            res.status(200).json({success:"Quiz Added succefully"})
            
        } catch (error) {
            console.log(error);
            res.status(200).json({error:"Quiz Not Added"})
        }

    }else if(req.method === "GET"){

        try {
            const quiz = await QuizModal.find()
            let sortQuiz = quiz.sort((a, b)=> {
               return  b.updatedAt - a.updatedAt
            })
            res.status(200).json(sortQuiz)
            
        } catch (error) {
            res.status(500).json({error:"Enternal server Error"})
            
        }

    }

   
};


export default connectDb(handler);