import BookModal from "../../../../modals/bookModal";

export default async (req, res) => {

    try {
        const {bid} = req.query;
        const Book = await BookModal.findById(bid)
        res.status(200).json(Book)
        
    } catch (error) {
        console.log(error);
    }
}