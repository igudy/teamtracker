import mongoose from "mongoose";

// If you want to use subdocument schema for the date
// const dateSchema = new mongoose.Schema({
//   day: {
//     type: Number,
//     required: true,
//   },
//   month: {
//     type: Number,
//     required: true,
//   },
//   year: {
//     type: Number,
//     required: true,
//   },
// });

// usage 
// const newPost = new Post({
//   title: 'New Post',
//   description: 'This is a new post description.',
//   tags: ['tag1', 'tag2', 'tag3'],
//   date: {
//     day: 20,
//     month: 7,
//     year: 2023,
//   },
// });

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        maxlength: 100,
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
        maxlength: 500,
    },

    // options style incase you need it for your web application
    // staus: {
    //     type: String,
    //     enum: ['draft', 'pending', 'published'],
    //     default: 'published'
    // },
    
    tags: {
    type: [String], // Use an array of Strings for tags
    required: [true, 'Please provide at least one tag'],
    },
    date: {
        type: Date,
        default: Date.now, // Sets the date to the current date and time by default
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee',
        required: [true, 'Please provide an employee'],
    }
}, { timestamps: true })

const Post = mongoose.model('Post', PostSchema);
export default Post;