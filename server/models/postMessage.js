import mongoose from "mongoose";
// define attributes of database object
const postSchema = mongoose.Schema({
   title: String,
   message: String,
   creator: String,
   tags: [String],
   selectedFile: String,
   likeCount: {
    type: Number,
    default: 0
   },
   createdAt: {
    type: Date,
    default: new Date()
   },
});

const PostMessage = mongoose.model('PostMessage', postSchema)
// exporting mongoose model from postmessage file, will be able to find run commands on these later
export default PostMessage;