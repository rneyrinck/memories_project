import express from "express";
// import request handler function -> has to include filetype ".js"
import { getPosts, createPosts } from "../controllers/posts.js";

const router = express.Router();
// database call with route and controller callback function
router.get('/', getPosts);
router.post('/', createPosts);

export default router;