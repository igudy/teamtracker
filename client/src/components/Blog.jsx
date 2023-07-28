import React from "react"
import blogPosts from "../testData/fakeData"

const Blog = () => {
  return (
    <div className="mx-2 font-space-grotesk">
      <div className="text-2xl font-bold">Recent Posts</div>
      <div className="flex-row xl:flex lg:flex">
        <div className="flex-col basis-[75%]">
          {blogPosts.map((post) => (
            //   <div key={post.id} className="border-2 my-3 pl-3">
            <div
              key={post.id}
              className="rounded-lg border border-gray-300 bg-white/20 pl-4 backdrop-blur-lg backdrop-filter p-4 my-3 mx-3"
            >
              <div className="flex flex-row">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-full h-14"
                />
                <div className="ml-4">
                  <h1 className="text-xl font-bold">{post.title}</h1>
                  <span className="flex-col">
                    {post.createdBy}
                    <span className="text-sm"> - {post.createdAt}</span>
                  </span>
                </div>
              </div>

              <p className="my-3">{post.description}</p>
              <h3 className="ml-1 text-blue-900">#{post.tag}</h3>
            </div>
          ))}
        </div>

        <div className="flex-col ml-4">
          <div className="text-2xl font-bold mt-1">Tags</div>
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
