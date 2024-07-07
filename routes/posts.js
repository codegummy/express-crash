import express from "express"
import { createNewPost, deletePost, getPosts, getSinglePost, updatePost } from "../controllers/postController.js";
const router = express.Router()



router.get("/", getPosts);

//get single post
router.get("/:id", getSinglePost);

//crearewe new post
router.post("/", createNewPost)

//update posts
router.put("/:id", updatePost)

//delete post
router.delete("/:id",deletePost


)




export default router