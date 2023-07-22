import mongoose from "mongoose";
import Employee from './Employee.js'

// If you want to use subdocument schema for the date
const dateSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

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
    type: [String],
    required: [true, 'Please provide at least one tag'],
    },

    date: {
        type: dateSchema,
        // default: Date.now
    },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'Employee',
    required: [true, 'Please provide an employee'],
  },
}, { timestamps: true })

const Post = mongoose.model('Post', PostSchema);
export default Post;