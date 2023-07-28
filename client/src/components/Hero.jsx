import React from "react"
import HeroImage from "../assets/images/hero.png"

const Hero = () => {
  return (
    <div className="flex flex-col font-space-grotesk">
      <div>
        <img
          src={HeroImage}
          alt="hero-page"
          className="flex justify-self-center items-center lg:h-[600px] lg:w-[1100px] lg:ml-16 xl:h-[700px] xl:w-full"
        />
      </div>

      <div className="flex ml-[6rem] mt-[-10rem] mb-[6rem]">
        <div className="bg-orange-600 h-7 w-[10rem] rounded-xl  hover:bg-orange-400 cursor-pointer">
          <h3 className="text-white ml-3 flex justify-center items-center">
            Create Post
          </h3>
        </div>
        <div className="border-orange-600 border-2 hover:border-orange-400 ml-10 h-7 w-[10rem] rounded-xl cursor-pointer">
          <h3 className="text-black flex justify-center items-center">
            Profile
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Hero
