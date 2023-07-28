import logo from "../assets/images/tt-logo.png"

const Footer = () => {
  return (
    <footer className="text-white font-space-grotesk">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mb-[-1rem]"
      >
        <path
          fill="#ff5500"
          fill-opacity="1"
          d="M0,64L14.1,101.3C28.2,139,56,213,85,245.3C112.9,277,141,267,169,250.7C197.6,235,226,213,254,176C282.4,139,311,85,339,80C367.1,75,395,117,424,144C451.8,171,480,181,508,186.7C536.5,192,565,192,593,186.7C621.2,181,649,171,678,181.3C705.9,192,734,224,762,240C790.6,256,819,256,847,229.3C875.3,203,904,149,932,144C960,139,988,181,1016,186.7C1044.7,192,1073,160,1101,138.7C1129.4,117,1158,107,1186,128C1214.1,149,1242,203,1271,192C1298.8,181,1327,107,1355,80C1383.5,53,1412,75,1426,85.3L1440,96L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-primary-100 py-16 bg-[#ff5500]">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            {/* <div className="bg-white w-16 h-16 rounded-full">
              <img
                alt="logo"
                src={logo}
                className="flex justify-center align-middle h-10 w-14"
              />
            </div> */}
            <h3 className="text-3xl font-bold">TeamTracker++</h3>
            <p className="my-5">
              TeamTracker is an advanced employee management system. It provides
              organizations with a comprehensive solution to effectively track
              and manage their team
            </p>
            <p>© Igudy All Rights Reserved.</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Facebook</p>
            <p className="my-5">Instagram</p>
            <p>Github</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
            <p>(+234)8108251426</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
