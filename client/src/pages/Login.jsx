import React from "react"

const Login = () => {
  return (
    <>
      <div className="flex">
        <div>
          <h3 className="mt-[5rem] text-5xl text-bold font-space-grotesk font-medium ml-8">
            Hey,
            <span className="flex flex-row mt-10">Welcome Back!</span>
            {/* <div className="mt-[3rem] text-3xl">Employee Management System</div> */}
          </h3>

          <div className="ml-8 mt-10 flex flex-col font-space-grotesk">
            {/* Input part */}
            {/*Email  */}
            <label htmlFor="email" className="pl-1">
              Email
            </label>
            <input
              className="input-full"
              placeholder="Enter Email"
              name="email"
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
            />

            {/* Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 rounded-md text-white mt-10 h-10 text-center">
              Login
            </button>

            {/* Google Sign up */}
            <div className="mt-[3rem]">
              <h3>Login with Google</h3>
            </div>
          </div>
        </div>

        <div>Image part</div>
      </div>
    </>
  )
}

export default Login
