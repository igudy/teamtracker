import Post from "../models/Post.js";
import { StatusCodes } from "http-status-codes";
import NotFoundError from '../errors/index.js'
import BadRequestError from '../errors/index.js'

const getAllPosts = async (req, res) => {
    res.send("Get all Posts")
}

const getPost = async (req, res) => {
    res.send("Get Post")
}

const createPost = async (req, res) => {
    req.body.createdBy = req.employee.employeeId
    console.log(req.employee.employeeId);
  const post = await Post.create(req.body)
  res.status(StatusCodes.CREATED).json({ post })
}

// const createPost = async (req, res) => {
//     req.body.createdBy = req.employee.employeeId
//     console.log(req.body.createdBy)
//     const post = await Post.create(req.body)
//     res.status(StatusCodes.CREATED).json({post})
// }

const updatePost = async (req, res) => {
    res.send("Update Post")
}

const deletePost = async (req, res) => {
    res.send("Delete Post")
}

export { getAllPosts, getPost, createPost, updatePost, deletePost }