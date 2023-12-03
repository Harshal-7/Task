import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";
import instagramLogo from '../assets/instagram.png'
import linkdinLogo from '../assets/linkedin.png'
import githubLogo from '../assets/github.png'

function About() {
    return (
        <div className="font-sans max-w-2xl mx-auto sm:px-6 lg:px-8">
            <div className="text-2xl  font-extrabold mt-14 px-5 py-5 text-center text-orange-600">
                <div className="mb-10 ">
                    Simply create any TASK
                </div>

                <div className="text-xl font-light mb-10">
                    Manage, capture and edit your tasks from anywhere at any time
                    from your mobile and computers. <br /> <br />
                    Your tasks will be saved in your system even after you close the browser, unless you delete or remove them.
                </div>
                {/* <div className="text-2xl font-light mb-10">
                    Created using Vite React + TailwindCSS
                </div> */}

                <div className="mt-14 flex justify-center">

                    <img src="assets/pfp.jpeg" alt="" className="rounded-full w-48 " />

                </div>

                <div className="mt-2 px-2 py-2 justify-center text-white">
                    <h3 className="text-xl font-semibold mt-2">Developed by</h3>
                    <h3 className="text-4xl font-extrabold">Harshal Shinde</h3>
                </div>

                <div>                

                    <nav className="px-2 sm:px-4 py-2.5 rounded text-white">

                        <div className=" font-bold justify-center text-xl mt-10">
                            Connect With Me
                        </div>

                        <div className="container flex items-center justify-center space-x-10 mt-6 mx-auto">

                            <Link to="https://www.instagram.com/jeonhrs_/" className="flex items-center">
                                <img src={instagramLogo} className="h-6 mr-3 sm:h-9" alt="instagram" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap">Instagram</span>
                            </Link>

                            <Link to="https://www.linkedin.com/in/harshal-shinde-77a862210" className="flex items-center">
                                <img src={linkdinLogo} className="h-6 mr-3 sm:h-9" alt="linkdin" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap ">Linkdin</span>
                            </Link>

                            <Link to="https://github.com/Harshal-7" className="flex items-center">
                                <img src={githubLogo} className="h-6 mr-3 sm:h-9" alt="github" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap ">Github</span>
                            </Link>



                        </div>
                    </nav>

                </div>

            </div>
        </div>
    )
}

export default About