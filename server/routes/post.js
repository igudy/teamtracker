import express from 'express';
const router = express.Router();
import {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} from '../controllers/Post.js';

router.route('/').post(createPost).get(getAllPosts)
router.route('/:id').get(getPost).patch(updatePost).delete(deletePost);

export default router;