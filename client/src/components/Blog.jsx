import React from "react"
import blogPosts from "../testData/fakeData"

const Blog = () => {
  return (
    <div className="mx-2">
      <div className="text-2xl font-bold">Recent Posts</div>
      <div className="flex">
        <div className="flex-col bas">
          {blogPosts.map((post) => (
            //   <div key={post.id} className="border-2 my-3 pl-3">
            <div
              key={post.id}
              className="rounded-lg border border-gray-300 bg-white/20 my-3 pl-4 backdrop-blur-lg backdrop-filter "
            >
              <h1>{post.title}</h1>
              <img src={post.image} alt={post.title} />
              <p>
                {post.description} by {post.createdBy}
              </p>
              <h3>{post.tag}</h3>
              <p>{post.createdAt}</p>
            </div>
          ))}
        </div>

        <div className="flex-col">
          {blogPosts.map((post) => (
            //   <div key={post.id} className="border-2 my-3 pl-3">
            <div key={post.id} className=" ">
              <h3>{post.tag}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
