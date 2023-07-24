import Post from "../models/Post.js";
import {
    StatusCodes
} from "http-status-codes";
import NotFoundError from '../errors/index.js'
import BadRequestError from '../errors/index.js'

const getAllPosts = async (req, res) => {
    const posts = await Post.find({
        createdBy: req.employee.employeeId
    }).sort('CreatedAt');
    res.status(StatusCodes.OK).json({
        posts,
        count: posts.length
    })
}

const getPost = async (req, res) => {
    const {
        employee: {
            employeeId
        },
        params: {
            id: postId
        },
    } = req
    console.log(req.params.id)

    const post = await Post.findOne({
        _id: postId,
        createdBy: employeeId,
    })

    console.log(post)
    if (!post) {
        throw new NotFoundError(`No post with id ${postId}`)
    }
    res.status(StatusCodes.OK).json({
        post
    })
    //   res.send('Get Post')
}

const createPost = async (req, res) => {
    req.body.createdBy = req.employee.employeeId
    const post = await Post.create(req.body)
    res.status(StatusCodes.CREATED).json({
        post
    })
}

const updatePost = async (req, res) => {
    const {
        body: {
            title,
            description,
            tags
        },
        employee: {
            employeeId
        },
        params: {
            id: postId
        },
    } = req

    if (title === '' || description === '' || tags === "") {
        throw new BadRequestError('Title, description or tags fields cannot be empty')
    }
    const post = await Post.findByIdAndUpdate({
            _id: postId,
            createdBy: employeeId
        },
        req.body, {
            new: true,
            runValidators: true
        }
    )
    if (!post) {
        throw new NotFoundError(`No post with id ${postId}`)
    }
    res.status(StatusCodes.OK).json({
        post
    })
}

const deletePost = async (req, res) => {
    const {
        employee: {
            employeeId
        },
        params: {
            id: postId
        },
    } = req

    const post = await Post.findByIdAndRemove({
        _id: postId,
        createdBy: employeeId,
    })
    if (!post) {
        throw new NotFoundError(`No post with id ${postId}`)
    }
    res.status(StatusCodes.OK).send()
}

export {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}