import ieeeUIResizedBlue from "@img/logo/ieee-ui-resized-blue.png"
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full duration-300 navigation">
        <div className="container">
            <nav className="relative flex items-center justify-between py-2 duration-300 navbar navbar-expand-lg">
                <a className="pl-4 navbar-brand" href="index.html">
                    <Image src={ieeeUIResizedBlue} alt="IEEE SB UI"/>
                </a>
                <button className="block navbar-toggler focus:outline-none lg:hidden" type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                </button>

                <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none"
                    id="navbarSupportedContent">
                    <ul className="items-center justify-center mr-auto navbar-nav lg:flex">
                        <li className="nav-item">
                            <a className="page-scroll active" href="#hero-area">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="page-scroll" href="#about-us">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="page-scroll" href="#divisions">Divisions</a>
                        </li>
                        <li className="nav-item">
                            <a className="page-scroll" href="#benefits">Benefits</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-team" href="team.html">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-team"
                                onClick={() => {window.open('https://remote-lib.ui.ac.id:2147/Xplore/home.jsp', '_blank')}}>IEEE
                                Xplore UI</a>
                        </li>
                        <li className="nav-item lg:hidden">
                            <a className="nav-team" href="memberRegistration.html">Register</a>
                        </li>
                    </ul>
                </div>
                <div className="hidden pr-10 header-btn sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                    <a className="px-10 py-3 text-blue-800 duration-300 border border-blue-800 rounded-full hover:bg-blue-600 hover:text-white"
                        href="memberRegistration.html">Register</a>
                </div>
            </nav>
        </div>
    </div>
  )
}

export {Navbar}