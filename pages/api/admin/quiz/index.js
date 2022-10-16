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

    } else if(req.method === "PUT"){
        try {
            const {_id, ...RestAll} = req.body;
             
            
            await QuizModal.findByIdAndUpdate(_id, RestAll,  {new:true})

    
            res.status(200).json({success:"Quiz Edited succefully"})
            
            
        } catch (error) {
            console.log(error);
            res.status(200).json({error:"Quiz Not Edited"})
        }
    } else if(req.method === "DELETE"){
        try {
            const id = req.body;

            await QuizModal.findByIdAndDelete(id)
            res.status(200).json({success:"Quiz Deleted"})

             
            
            
        } catch (error) {
            console.log(error);
            res.status(200).json({error:"Quiz Not Deleted"})
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