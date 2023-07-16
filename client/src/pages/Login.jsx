import React, { useState } from "react"
import axios from "axios"

// Images import
import Google from "../assets/icons/google.svg"
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

          <div className="ml-8 mt-10 flex flex-col font-space-grotesk">
            {/* Input part */}
            {/*Email  */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="pl-1">
                Email
              </label>
              <input
                className="input-full"
                placeholder="Enter Email"
                name="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                autoComplete="off"
              />

              {/* Password */}
              <label htmlFor="password" className="pl-1 mt-4">
                Password
              </label>
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
              {/* Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 rounded-md text-white mt-10 h-10 text-center">
                Login
              </button>
            </form>

            {/* Google Sign up */}
            <div className="mt-[3rem]">
              <div className="flex pl-3 outline outline-offset-2 outline-orange-500 hover:outline-orange-600 focus:outline-orange-600 cursor-pointer outline-2 rounded-2xl h-8">
                <img src={Google} alt="google-icon" className="h-6 w-6 pt-1" />
                <span className="text-xl">Login with Google</span>
              </div>
            </div>
          </div>
        </div>

        <div>
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
