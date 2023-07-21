const getAllPosts = async (req, res) => {
    res.send("Get all Posts")
}

const getPost = async (req, res) => {
    res.send("Get Post")
}

const createPost = async (req, res) => {
    res.json(req.Post)
}

const updatePost = async (req, res) => {
    res.send("Update Post")
}

const deletePost = async (req, res) => {
    res.send("Delete Post")
}

export { getAllPosts, getPost, createPost, updatePost, deletePost }