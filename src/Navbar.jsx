import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosSettings } from 'react-icons/io'
import { MdHomeFilled } from 'react-icons/md'
import { PiRankingBold } from 'react-icons/pi'
import { Link, useLocation } from 'react-router-dom'
import Logo from './assets/logo.svg';

const Navbar = () => {
    const location = useLocation().pathname.split("/")[1]
    return (
        <div className={`w-[100%] flex justify-between items-center flex-wrap`}>

            <div className='flex items-center gap-x-2 md:gap-x-7 cursor-pointer'>
                <div className='w-[2rem] h-[2rem] bg-[#fff] flex lg:hidden justify-center items-center rounded-md text-black'>
                    <GiHamburgerMenu className={`cursor-pointer md:mt-0`} onClick={() => toggleNav(!isNavOpen)} />
                </div>
                <img src={Logo} alt="" />
                <Link to={"/"} className={`flex items-center gap-x-1 md:gap-x-3 ${!location?"text-[#FB7F3F]":"text-[#fff]"}`}>
                    <MdHomeFilled />
                    <p>Home</p>
                </Link>
                <Link to={"/favorites"} className={`flex items-center gap-x-1 md:gap-x-3 ${location==="favorites"?"text-[#FB7F3F]":"text-[#fff]"}`}>
                    <PiRankingBold />
                    <p>Favorites</p>
                </Link>
            </div>

            <Link to={"/settings"} className='flex items-center justify-center gap-x-4 text-white'>
                <IoIosSettings className='cursor-pointer' />
            </Link>

        </div>

    )
}

export default Navbar
