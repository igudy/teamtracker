import React from "react"
import NavBar from "../components/NavBar"
import Blog from "../components/Blog"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Pagination from "../components/Pagination"

const EmployeeBlog = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Blog />
      <Pagination />
      <Footer />
    </>
  )
}

export default EmployeeBlog
