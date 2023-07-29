import React, { useState } from "react"
import logo from "../assets/images/tt-logo.png"
import { Link } from "react-router-dom"
import EmployeeBlog from "../pages/EmployeeBlog"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="w-full font-space-grotesk p-[10px] px-10 flex justify-between items-center">
      <div className="flex">
        <Link to="/employee-blog">
          <img src={logo} className="h-[40px]" />
        </Link>
        <span className="hidden font-space-grotesk mt-1  font-black text-3xl text-black text-left xl:block lg:block md:block">
          TeamTracker++
        </span>
      </div>

      <div>
        <ul className="hidden md:flex font-semibold">
          <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out mx-3 hover:text-orange-700 hover:underline hover:underline-offset-2">
            <a href="#">Home</a>
          </li>
          <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out mx-3 hover:text-orange-700 hover:underline hover:underline-offset-2">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out mx-3 hover:text-orange-700 hover:underline hover:underline-offset-2">
            <a href="#">About</a>
          </li>
          <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out mx-3 hover:text-orange-700 hover:underline hover:underline-offset-2">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="flex flex-col  items-end">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setToggle(!toggle)}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setToggle(!toggle)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 cursor-pointer md:hidden h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}

          {toggle ? (
            <ul className="md:hidden absolute flex mt-8 flex-col bg-gray-200 p-2 rounded-sm z-[9999]">
              <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out mx-3 hover:text-orange-700 hover:underline hover:underline-offset-2">
                <a href="#">Home</a>
              </li>
              <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out mx-3 hover:text-orange-700 hover:underline hover:underline-offset-2">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out mx-3 hover:text-orange-700 hover:underline hover:underline-offset-2">
                <a href="#">About</a>
              </li>
              <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out mx-3 hover:text-orange-700 hover:underline hover:underline-offset-2">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          ) : null}
        </div>
        {/* <ul className={!toggle?'hidden':'flex'}>
                LOGO
            </ul> */}
      </div>
    </div>
  )
}

export default NavBar
