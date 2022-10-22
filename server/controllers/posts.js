import PostMessage from "../models/postMessage.js";

// handlers for all routes go here
export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();

    console.log(postMessages);
    // success status
    res.status(200).json(postMessages);
  } catch (error) {
    // not found
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    // creation status
    res.status(201).json(newPost);
  } catch (error) {
    // unable to create
    res.status(409).json({ message: error.message });
  }
};
