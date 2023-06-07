import Users from "../models/Users.js";
import Good from "../models/Good.js";
import Comment from "../models/Comment.js";
import Reply from "../models/Reply.js";

//GET COMMENTS
export const getComments = async(req, res) => {
    try {
        const id = req.params.id;
        const good = await Good.findById(id);
        const commentsIds = good.comments;
        
        async function promises(id) {
            return await Comment.findById(id)
        }

        const comments = await Promise.all(commentsIds.map(id => promises(id)));
        return comments ? res.json({message: "Comments successfully loaded", comments}) : res.json({message: "No comments yet", comments: null})
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
        await Good.findByIdAndUpdate(req.body.goodId, {
            $push: { comments: newComment }
        });
        await Users.findByIdAndUpdate(req.userId, {
            $push: { comments: newComment }
        });
        if(req.body.isReply) {
            await Comment.findByIdAndUpdate(req.body.commentId, {
                $push: { reply: newComment }
            })
        }
        return res.json({message: "Comment successfully added", newComment, isReply: req.body.isReply, parentCommentId: req.body.commentId})
    } catch (error) {
        res.json({message: "Error while adding comment"})
    }
}

//REMOVE COMMENT

export const removeComment = async(req, res) => {
    try {
        const comments = req.body.commentId;
        // const comments = await Comment.findById(req.body.commentId);
        const goodPromises = async(id) => {
            return await Good.findByIdAndUpdate(req.body.goodId, 
                { $pull : { comments: id } } 
            );
        }
        await Promise.all(comments.map(goodPromises));

        // await Good.findByIdAndUpdate(req.body.goodId, 
        //     { $pull : { comments: req.body.commentId } } 
        // );

        const usersPromises = async(id) => {
            return await Users.findByIdAndUpdate(req.userId, {
                $pull: { comments: id }
            }); 
        }
        await Promise.all(comments.map(usersPromises))
        // await Users.findByIdAndUpdate(req.userId, {
        //     $pull: { comments: req.body.commentId }
        // });

        const commentsPromises = async(id) => {
            return await Comment.deleteOne({ _id: id })
        }
        await Promise.all(comments.map(commentsPromises))
        // await Comment.deleteOne({ _id: req.body.commentId });
        return res.json({message: "Successfull comment delete", id: comments})
    } catch (error) {
        res.json({message: "Error while removing comment"})
    }
}

//REPLY ADD COMMENT
export const replyAddComment = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "No data"});
        const user = await Users.findById(req.userId);
        const name = user.username; 
        const { text } = req.body;
        const newReply = await new Reply({ name, text });
        await newReply.save();
        await Comment.findByIdAndUpdate(req.body.commentId, {
            $push: { reply: newReply }
        });
        return res.json({message: "New reply to comment successfully added", newReply})
    } catch (error) {
        res.json({message: "Error while replying to comment"})
    }
}