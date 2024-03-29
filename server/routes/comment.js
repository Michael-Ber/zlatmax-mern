import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { addComment, removeComment, getComments, replyAddComment } from "../controllers/comment.js";

const router = new Router();

//GET COMMENTS
router.get("/:id", getComments);

//ADD COMMENT 
//http://localhost:3005/good/comments

router.post("/add_comment", checkAuth, addComment)

//REMOVE COMMENT 
//http://localhost:3005/good/comments

router.put("/remove_comment/:id", checkAuth, removeComment)


//REPLY COMMENT 
//http://localhost:3005/good/comments

router.post("/reply_comment", checkAuth, replyAddComment)

export default router;