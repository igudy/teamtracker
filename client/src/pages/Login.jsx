import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

// Images import
import Google from "../assets/icons/google.svg"
import GitHub from "../assets/icons/github.svg"
import EmployeeManagement from "../assets/images/employeemag.png"

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  console.log(values)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("", values)
      .then((response) => {
        // Handle success
        console.log(response.data)
      })
      .catch((error) => {
        // Handle error
        console.error(error)
      })
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row mx-10">
        <div className="basis-[75%]">
          <h3 className="mt-[5rem] text-4xl text-bold font-space-grotesk font-medium mx-10">
            Hey,
            <span className="flex flex-row mt-10 text-4xl sm:text-5xl">
              Welcome Back!
            </span>
          </h3>

          <div className="ml-8 mt-12 flex flex-col font-space-grotesk">
            {/* Input part */}
            {/*Email  */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="pl-1">
                Email
              </label>
              <div className="mt-0.5">
                <input
                  className="input-full"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  autoComplete="off"
                />
              </div>

              {/* Password */}
              <div className="mt-2">
                <label htmlFor="password" className="pl-1">
                  Password
                </label>
              </div>

              <div className="mt-.5">
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="input-full"
                  autoComplete="off"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
              </div>
              {/* Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 rounded-md text-white mt-10 h-10 text-center">
                Login
              </button>
            </form>

            <p className="mt-3 text-gray-800">
              You don't have an account?{" "}
              <Link to="/register" className="text-blue-800 underline">
                Sign Up
              </Link>
            </p>

            {/* Google Sign up */}
            <div className="mt-[3rem] flex flex-col md:flex-row xl:flex-row w-full justify-center align-middle gap-[20%]">
              <div className="flex flex-row flex-wrap outline outline-offset-2 outline-orange-500 hover:outline-orange-600 focus:outline-orange-600 cursor-pointer outline-2 rounded-2xl h-6 px-4">
                <img src={Google} alt="google-icon" className="h-6" />
                <span className="pl-2">Login with Google</span>
              </div>

              {/* px-5 ml-10 outline outline-offset-2 outline-orange-500 hover:outline-orange-600 focus:outline-orange-600 cursor-pointer outline-2 rounded-2xl h-6 */}
              {/* Github */}
              <div className="flex flex-row flex-wrap outline outline-offset-2 outline-orange-500 hover:outline-orange-600 focus:outline-orange-600 cursor-pointer outline-2 rounded-2xl h-6 px-4 my-9 md:my-0 lg:my-0 xl:my-0">
                <img src={GitHub} alt="google-icon" className="h-6" />
                <span className="pl-2">Login with Github</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block xl:block">
          <img
            src={EmployeeManagement}
            alt="employeemanagement_illustration"
            className="md:mt-12"
          />
        </div>
      </div>
    </>
  )
}

export default Login
