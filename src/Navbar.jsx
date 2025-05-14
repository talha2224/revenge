import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosSettings } from 'react-icons/io'
import { MdChevronRight, MdHomeFilled, MdSearch, MdStar } from 'react-icons/md'
import { PiRankingBold } from 'react-icons/pi'
import { Link, useLocation } from 'react-router-dom'
import Logo from './assets/logo.svg';
import { FaUserCircle } from 'react-icons/fa'
import { RxCross1 } from "react-icons/rx";


const seasons = [
    { name: 'Regular Season', isStarred: true },
    { name: 'NBA Cup', isStarred: false },
    { name: 'Play-offs', isStarred: false },
    { name: 'All-Star Game', isStarred: false },
    { name: 'Las Vegas Summer League', isStarred: false },
    { name: 'California Classic Summer', isStarred: false },
];

const teams = [
    { name: 'Houston Rockets', isStarred: true, logo: '/placeholder.png' }, // Use a placeholder
    { name: 'Golden State Warriors', isStarred: false, logo: '/placeholder.png' },
    { name: 'Denver Nuggets', isStarred: false, logo: '/placeholder.png' },
    { name: 'Los Angeles Lakers', isStarred: false, logo: '/placeholder.png' },
]


const Navbar = () => {
    const location = useLocation().pathname.split("/")[1]
    const [show, setShow] = useState(false)
    return (

        <div className={`w-[100%] flex justify-between items-center flex-wrap`}>

            <div className='flex items-center gap-x-2 md:gap-x-7 cursor-pointer'>
                <div onClick={() => { setShow(!show) }} className='w-[2rem] h-[2rem] bg-[#fff] flex lg:hidden justify-center items-center rounded-md text-black'>
                    <GiHamburgerMenu className={`cursor-pointer md:mt-0`} onClick={() => toggleNav(!isNavOpen)} />
                </div>
                <img src={Logo} alt="" className='md:block hidden' />
                <Link to={"/home"} className={`flex items-center gap-x-1 md:gap-x-3 ${location === "home" ? "text-[#FB7F3F]" : "text-[#fff]"}`}>
                    <MdHomeFilled />
                    <p>Home</p>
                </Link>
                <Link to={"/favorites"} className={`flex items-center gap-x-1 md:gap-x-3 ${location === "favorites" ? "text-[#FB7F3F]" : "text-[#fff]"}`}>
                    <PiRankingBold />
                    <p>Favorites</p>
                </Link>
            </div>

            <div className='flex items-center gap-x-2'>
                <Link to={"/settings"} className='flex items-center justify-center gap-x-4 text-white'>
                    <IoIosSettings className='cursor-pointer' />
                </Link>
                <Link to={"/profile"} className='flex items-center justify-center gap-x-4 text-white cursor-pointer'>
                    <FaUserCircle />
                </Link>

            </div>


            {
                show && (
                    <div className='fixed top-0 left-0 w-[80vw] h-[100vh] p-5 bg-white lg:hidden block overflow-y-auto'>
                        <div className='flex justify-between items-center'>
                            <img src={Logo} alt="" />
                            <RxCross1 className='cursor-pointer' onClick={() => setShow(!show)} />
                        </div>
                        <div className='mt-5'>
                            <div onClick={() => setShow(!show)} className='h-[3rem] flex gap-x-2 items-center rounded-md bg-[#FB7F3F] text-[#fff] px-3'>
                                <img className='h-[1.7rem] rounded-md' src="https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg" alt="" />
                                <p className='text-xs text-nowrap truncate'>National Basketball Association</p>
                            </div>
                            <div onClick={() => setShow(!show)} className='h-[3rem] flex gap-x-2 items-center rounded-full bg-[#fff]'>
                                <img className='h-[3rem] rounded-md' src="https://images.seeklogo.com/logo-png/25/2/mlb-logo-png_seeklogo-250501.png" alt="" />
                                <p className=' text-sm'>Major League Baseball</p>
                            </div>
                            <div onClick={() => setShow(!show)} className='h-[3rem] flex gap-x-2 items-center rounded-full bg-[#fff] -ml-2'>
                                <img className='h-[2rem] rounded-md' src="https://1000logos.net/wp-content/uploads/2017/05/NFL-logo.jpg" alt="" />
                                <p className=' text-sm'>National Football League (NFL)</p>
                            </div>
                            <div onClick={() => setShow(!show)} className='h-[3rem] flex gap-x-2 items-center rounded-full bg-[#fff]'>
                                <img className='h-[2rem] rounded-md' src="https://loodibee.com/wp-content/uploads/NHL-league-logo-300x300.png" alt="" />
                                <p className=' text-sm'>National Hockey League</p>
                            </div>
                            <div onClick={() => setShow(!show)} className='h-[3rem] flex gap-x-2 items-center rounded-full bg-[#fff]'>
                                <img className='h-[2rem] rounded-md' src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fwnba.png" alt="" />
                                <p className='text-sm truncate'>Women's National Basketball Association</p>
                            </div>
                        </div>

                        <div className="lg:hidden block">

                            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mt-4">
                                <MdSearch className="text-gray-400 mr-2" size={20} />
                                <input type="text" placeholder="Search" className="bg-transparent text-white placeholder:text-gray-400 focus:outline-none w-full" />
                            </div>

                            {/* Main Content */}
                            <div className="space-y-6 py-2">
                                {/* Seasons Section */}
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-400 px-2 mb-2">SEASONS</h2>
                                    <div className="space-y-2">
                                        {seasons.map((season, index) => (
                                            <div key={index} className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <img className='h-[1.7rem] rounded-md' src="https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg" alt="" />
                                                    <span className="text-sm">{season.name}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    {season.isStarred ? <MdStar className="text-yellow-400 mr-1" size={20} /> : <MdStar className="text-white mr-1" size={20} />}
                                                    <MdChevronRight className="text-gray-400" size={20} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Teams Section */}
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-100 px-2 mb-2">TEAMS</h2>
                                    <div className="space-y-2">
                                        {teams.map((team, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <img src={`https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg`} alt={team.name} className="w-8 h-8 rounded-full" />
                                                    <span className="">{team.name}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    {team.isStarred ? <MdStar className="text-yellow-400 mr-1" size={20} /> : <MdStar className="text-white mr-1" size={20} />}
                                                    <MdChevronRight className="text-gray-400" size={20} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>

    )
}

export default Navbar
