import QuizModal from '../../../../modals/quizModal';
import connectDb from '../../../../middleware/mongooseCon'




const handler = async(req, res) => {


        try {
            const {unit_map} = req.query
            const quiz = await QuizModal.find()
            const updateSubjects = quiz.filter((inQuizSub)=>{
                  return unit_map === inQuizSub.subject;
                })


            // let sortQuiz = quiz.sort((a, b)=> {
            //    return  b.updatedAt - a.updatedAt
            // })
            res.status(200).json(updateSubjects)
            
        } catch (error) {
            res.status(500).json({error:"Enternal server Error"})
            
        }

    

   
};


export default connectDb(handler);