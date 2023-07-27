import React from "react"
import blogPosts from "../testData/fakeData"

const Blog = () => {
  return (
    <div className="mx-2">
      <div className="text-2xl font-bold">Recent Posts</div>
      <div>
        {blogPosts.map((post) => (
          <h1 key={post.id}>
            {post.post} <img src={post.image} alt={post.createdAt} />
          </h1>
        ))}
      </div>
    </div>
  )
}

export default Blog
