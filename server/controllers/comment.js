import Users from "../models/Users.js";
import Good from "../models/Good.js";
import Comment from "../models/Comment.js";

//GET COMMENTS
export const getComments = async(req, res) => {
    try {
        const id = req.headers.id;
        const comments = await Good.findById(id).comments;
        return res.json({message: "Comments successfully loaded", comments})
    } catch (error) {
        res.json({message: "Error while getting comments"})
    }
}


//ADD COMMENT
export const addComment = async(req, res) => {
    try {   
        const user = await Users.findById(req.userId);
        const name = user.username;
        const text = req.body.text;
        const newComment = await new Comment({name, text});
        await newComment.save();
        return res.json({message: "Comment successfully added", newComment})
    } catch (error) {
        res.json({message: "Error while adding comment"})
    }
}

//REMOVE COMMENT

export const removeComment = async(req, res) => {
    try {
        const comment = await Comment.findById(req.body.commentId);
        await Comment.deleteOne({ _id:req.body.commentId });
        await Good.findByIdAndUpdate(req.body.commentId, 
            { $pull : { comments: comment } } 
        )
        return res.json({message: "Successfull comment delete", id: req.body.commentId})
    } catch (error) {
        res.json({message: "Error while removing comment"})
    }
}