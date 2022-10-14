import QuizModal from '../../../../../modals/quizModal';
import connectDb from '../../../../../middleware/mongooseCon'




const handler = async(req, res) => {


        try {
            const {test_start} = req.query
            const quiz = await QuizModal.find()
            let updateSubjects = quiz.filter((inQuizSub)=>{
                  return test_start === inQuizSub.unitId;
                })
                
               const ran = await updateSubjects[Math.floor(Math.random()*updateSubjects.length)];

                
                // function get_random (list) {
                //     return list[Math.floor((Math.random()*list.length))];
                //   }
                // console.log(get_random(unitTest));
    

            console.log(ran);

            // let sortQuiz = quiz.sort((a, b)=> {
            //    return  b.updatedAt - a.updatedAt
            // })
            res.status(200).json(updateSubjects)
            
        } catch (error) {
            res.status(500).json({error:"Enternal server Error"})
            
        }

    

   
};


export default connectDb(handler);