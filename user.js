const mongoose = require("mongoose")
const { object } = require("webidl-conversions")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        required: true,
    },
    age: {
        type: Number,
        gte: 13,
        required: true,
    },
})

const postMediaSchema = new mongoose.Schema({
    url: {
        type: String,
        trim: true,
        required: true,
    }
},{
    _id: false,
})

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaType.objectId,
        ref: "User"
    },
    media: [postMediaSchema],
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    tags: [String]
})

const likeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaType.objectId,
        ref: "User"
    },
    postId: {
        type: mongoose.SchemaType.objectId,
        ref: "Post"
    },
})

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaType.objectId,
        ref: "User"
    },
    postId: {
        type: mongoose.SchemaType.objectId,
        ref: "Post"
    },
    text: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'N',
        trim: true,
    }
})

module.exports = mongoose.model("User", userSchema)
module.exports = mongoose.model("Post", postSchema)
module.exports = mongoose.model("Like", likeSchema)
module.exports = mongoose.model("Comment", commentSchema)