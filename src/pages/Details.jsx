import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import player from '../assets/player.png';
import frame70 from '../assets/frame70.png';
import { PiCalendarDot, PiRankingBold } from "react-icons/pi";
import { IoIosSettings } from 'react-icons/io';
import { useState } from "react";
import { MdChevronRight, MdLocationPin, MdSearch, MdStar, MdHomeFilled, MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineSportsBasketball } from 'react-icons/md';
import { FaClock, FaUsers } from "react-icons/fa";
import Navbar from "../Navbar";
import { FaHouse } from "react-icons/fa6";


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

const Details = () => {

    const nav = useNavigate()
    const [active, setActive] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <div className='w-screen h-screen bg-[#051427] overflow-y-auto p-5 relative'>

            <Navbar />


            <div className='flex justify-between items-center overflow-x-auto mt-5 gap-x-5'>
                <div className='min-w-[18rem] max-w-[18rem] h-[3rem] flex justify-between items-center rounded-full bg-[#FB7F3F] text-[#fff] px-3'>
                    <img className='h-[1.7rem] rounded-md' src="https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg" alt="" />
                    <p className=' text-sm'>National Basketball Association</p>
                </div>
                <div className='min-w-[18rem] max-w-[18rem] h-[3rem] flex justify-center gap-x-2 items-center rounded-full bg-[#fff]'>
                    <img className='h-[3rem] rounded-md' src="https://images.seeklogo.com/logo-png/25/2/mlb-logo-png_seeklogo-250501.png" alt="" />
                    <p className=' text-sm'>Major League Baseball</p>
                </div>
                <div className='min-w-[18rem] max-w-[18rem] h-[3rem] flex justify-center gap-x-0 items-center rounded-full bg-[#fff]'>
                    <img className='h-[2rem] rounded-md' src="https://1000logos.net/wp-content/uploads/2017/05/NFL-logo.jpg" alt="" />
                    <p className=' text-sm'>National Football League (NFL)</p>
                </div>
                <div className='min-w-[18rem] max-w-[18rem] h-[3rem] flex justify-center gap-x-2 items-center rounded-full bg-[#fff]'>
                    <img className='h-[2rem] rounded-md' src="https://loodibee.com/wp-content/uploads/NHL-league-logo-300x300.png" alt="" />
                    <p className=' text-sm'>National Hockey League</p>
                </div>
                <div className='min-w-[18rem] max-w-[18rem] px-3 h-[3rem] flex justify-center items-center rounded-full bg-[#fff]'>
                    <img className='h-[2rem] rounded-md' src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fwnba.png" alt="" />
                    <p className=' text-sm truncate'>Women's National Basketball Association</p>
                </div>
            </div>


            <div className="lg:flex gap-x-10 items-start mt-6">

                <div className="lg:block hidden">

                    <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
                        <MdSearch className="text-white mr-2" size={20} />
                        <input type="text" placeholder="Search" className="bg-transparent text-white placeholder:text-white focus:outline-none w-full" />
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6 py-6">
                        {/* Seasons Section */}
                        <div>
                            <h2 className="text-sm font-semibold text-white px-2 mb-2">SEASONS</h2>
                            <div className="space-y-2">
                                {seasons.map((season, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3">
                                        <div className="flex items-center gap-x-2">
                                            <img className='h-[1.7rem] rounded-md' src="https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg" alt="" />
                                            <span className="text-white text-sm">{season.name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            {season.isStarred ? <MdStar className="text-yellow-400 mr-1" size={20} /> : <MdStar className="text-white mr-1" size={20} />}
                                            <MdChevronRight className="text-white" size={20} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Teams Section */}
                        <div>
                            <h2 className="text-sm font-semibold text-white px-2 mb-2">TEAMS</h2>
                            <div className="space-y-2">
                                {teams.map((team, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src={`https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg`} alt={team.name} className="w-8 h-8 rounded-full" />
                                            <span className="text-white">{team.name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            {team.isStarred ? <MdStar className="text-yellow-400 mr-1" size={20} /> : <MdStar className="text-white mr-1" size={20} />}
                                            <MdChevronRight className="text-white" size={20} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1">

                    <div className="flex items-center justify-between px-4 py-3 bg-[#222222] rounded-md">
                        <div className="flex items-center gap-3">
                            <img className="h-8" src={`https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg`} alt="" />
                            <div className="flex flex-col">
                                <span className="text-white font-medium">Regular Season</span>
                                <span className="text-white text-xs">National Basketball Association (NBA)</span>
                            </div>
                        </div>

                        <div></div>
                        <div className="text-white text-sm">Quarter Finals</div>
                    </div>

                    <div className="mt-4 flex items-center justify-between flex-wrap text-white">

                        <div className="flex items-center gap-x-2">
                            <button className="bg-[#FB7F3F] px-4 py-1 rounded-md">Live</button>
                            <MdOutlineChevronLeft />
                        </div>

                        <p>Today</p>

                        <div className="flex items-center gap-x-2">
                            <PiCalendarDot />
                            <MdOutlineChevronRight />
                        </div>

                    </div>

                    <img src={frame70} alt="" className="mt-5" />

                    <div className="mt-5 flex items-center gap-x-4 overflow-x-auto">
                        <p onClick={() => setActive(0)} className={`${active == 0 ? "text-[#FB7F3F]" : "text-[#fff]"} cursor-pointer text-nowrap `}>Narrative</p>
                        <p onClick={() => setActive(1)} className={`${active == 1 ? "text-[#FB7F3F]" : "text-[#fff]"} cursor-pointer text-nowrap `}>Game Info</p>
                        <p onClick={() => setActive(2)} className={`${active == 2 ? "text-[#FB7F3F]" : "text-[#fff]"} cursor-pointer text-nowrap `}>Scoreboard</p>
                        <p onClick={() => setActive(3)} className={`${active == 3 ? "text-[#FB7F3F]" : "text-[#fff]"} cursor-pointer text-nowrap `}>Box Score</p>
                    </div>


                    {
                        active == 0 && (
                            <div>

                                <div className="bg-[#222222] p-5 text-[#fff] mt-3">
                                    <div className="flex items-center gap-x-4">
                                        <p>Overview</p>
                                        <button className="bg-[#FB7F3F] px-3 py-1 rounded-full">AI-Powered</button>
                                    </div>
                                    <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur. Amet fames sed senectus nulla sit purus faucibus vitae. Ut porttitor neque magna nibh accumsan aliquet commodo ultrices. Aliquet justo commodo rhoncus est. Ultrices sit vestibulum lacinia est nibh pellentesque turpis aliquam. Ullamcorper at lacus etiam vestibulum libero tortor aliquam. Bibendum id leo ullamcorper arcu donec ut. Elit pellentesque sapien in sit enim aliquet. A consequat nullam aenean sed consequat vitae. Hac elit eu risus eget viverra ornare. Praesent diam bibendum tortor blandit diam eget turpis tortor purus. Egestas viverra pellentesque pharetra morbi vel bibendum.</p>
                                </div>

                                <div className="bg-[#222222] p-5 text-[#fff] mt-3">
                                    <div className="flex items-center gap-x-4">
                                        <p>Narratives</p>
                                        <button className="bg-[#FB7F3F] px-3 py-1 rounded-full">AI-Powered</button>
                                    </div>
                                    <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur. Amet fames sed senectus nulla sit purus faucibus vitae. Ut porttitor neque magna nibh accumsan aliquet commodo ultrices. Aliquet justo commodo rhoncus est. Ultrices sit vestibulum lacinia est nibh pellentesque turpis aliquam. Ullamcorper at lacus etiam vestibulum libero tortor aliquam. Bibendum id leo ullamcorper arcu donec ut. D. Bane Elit pellentesque sapien in sit enim aliquet. A consequat nullam aenean sed consequat vitae. Hac elit eu risus eget viverra ornare. Praesent diam bibendum tortor blandit diam eget turpis tortor purus. Egestas viverra pellentesque pharetra morbi vel bibendum. <br />Lorem ipsum dolor sit amet consectetur. Amet fames sed senectus nulla sit purus faucibus vitae. Ut porttitor neque magna nibh accumsan aliquet commodo ultrices. Aliquet justo commodo rhoncus est. Ultrices sit vestibulum lacinia est nibh pellentesque turpis aliquam. Ullamcorper at lacus etiam vestibulum libero tortor aliquam. Bibendum id leo ullamcorper arcu donec ut. Elit pellentesque sapien in sit enim aliquet. A consequat nullam aenean sed consequat vitae<br /> Lorem ipsum dolor sit amet consectetur. D. Bane Amet fames sed senectus nulla sit purus faucibus vitae. Ut porttitor neque magna nibh accumsan aliquet commodo ultrices. Aliquet justo commodo rhoncus est. Ultrices sit vestibulum lacinia est nibh pellentesque turpis aliquam. Ullamcorper at lacus etiam vestibulum libero tortor aliquam. Bibendum id leo ullamcorper arcu donec ut. Elit pellentesque sapien in sit enim aliquet. A consequat nullam aenean sed consequat vitae. Hac elit eu risus eget viverra ornare. Praesent diam bibendum tortor blandit diam eget turpis tortor purus. D. Bane Egestas viverra pellentesque pharetra morbi vel bibendum. </p>
                                </div>

                                <div className="bg-[#222222] p-5 text-[#fff] mt-3">
                                    <p>Specials</p>

                                    {
                                        [1, 2, 4]?.map((i) => (
                                            <div key={i} className="mt-2 flex justify-between items-center flex-wrap">

                                                <div className=" mt-2  flex items-center gap-x-3">
                                                    <img className="w-[3rem] h-[3rem] rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                                    <div>
                                                        <p className=" text-[#E82A41]">D. Bane</p>
                                                        <p className=" text-[#FFFFFF]">Shooting Guard</p>
                                                    </div>
                                                </div>

                                                <button className=" mt-2 px-3 py-1 rounded-md text-[#fff] bg-[#E82A41]">Homecoming</button>

                                                <div className=" mt-2  flex items-center gap-x-3">
                                                    <img className="h-8" src={`https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg`} alt="" />
                                                    <p className=" text-[#FFFFFF]">Houston Rockets</p>
                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>

                            </div>
                        )
                    }


                    {active === 1 && (
                        <div className="bg-[#222222] p-4 space-y-2 mt-5">
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                <MdOutlineSportsBasketball className="text-white" size={16} />
                                <span className="font-medium">Game:</span>
                                <span>USA, NBA - 1st Round, Game 4</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                <MdLocationPin className="text-white" size={16} />
                                <span className="font-medium">Location:</span>
                                <span>FedExForum, Memphis, TN</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                <FaUsers className="text-white" size={16} />
                                <span className="font-medium">Match Attendance:</span>
                                <span>16,667</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                <PiCalendarDot className="text-white" size={16} />
                                <span className="font-medium">Date:</span>
                                <span>11th April, 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                <FaClock className="text-white" size={16} />
                                <span className="font-medium">Time:</span>
                                <span>12:29 PM</span>
                            </div>
                        </div>
                    )}

                    {active === 2 && (
                        <div className="bg-[#222222] p-4 mt-5">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">Team</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">Q1</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">Q2</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">Q3</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">Q4</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-[#222222]">
                                        <tr>
                                            <td className="px-4 py-2 text-white text-sm">Houston Rockets</td>
                                            <td className="px-4 py-2 text-white text-sm">36</td>
                                            <td className="px-4 py-2 text-white text-sm">27</td>
                                            <td className="px-4 py-2 text-white text-sm">28</td>
                                            <td className="px-4 py-2 text-white text-sm">36</td>
                                            <td className="px-4 py-2 text-white text-sm">127</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 text-white text-sm">Golden State Warriors</td>
                                            <td className="px-4 py-2 text-white text-sm">31</td>
                                            <td className="px-4 py-2 text-white text-sm">27</td>
                                            <td className="px-4 py-2 text-white text-sm">29</td>
                                            <td className="px-4 py-2 text-white text-sm">27</td>
                                            <td className="px-4 py-2 text-white text-sm">195</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {active === 3 && (
                        <div className="bg-[#222222] p-4 mt-5">
                            <div className="flex items-center gap-x-4 text-[#fff]">
                                <img className="h-8" src={`https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg`} alt="" />
                                <p>Houston Rockets</p>
                            </div>

                            <div className="overflow-x-auto mt-4 ">
                                <table className="min-w-full border border-[#696969]">
                                    <thead className="p-3">
                                        <tr className="border-b border-b-[#696969]">
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">Starters</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">MIN</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">PTS</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">REB</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">AST</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">STL</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">BLK</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">FG</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">3PT</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">FT</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">OR</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">DR</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">TO</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">PF</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">+/-</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-[#222222] ">
                                        {
                                            [1, 2, 3]?.map((i,index) => (
                                                <tr className="border-b border-b-[#696969]" key={i}>
                                                    <td className="px-4 py-2 flex items-center gap-x-2 text-white text-sm">
                                                        <img
                                                            className="h-6 w-6 rounded-full"
                                                            src={`https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg`}
                                                            alt="S. Aldama"
                                                        />
                                                        <div>
                                                            <p className="text-nowrap">S. Aldama</p>
                                                            <p className="text-nowrap text-sm text-gray-600">S. Aldama</p>
                                                        </div>

                                                        <div
                                                            onMouseEnter={() => setHoveredIndex(index)}
                                                            onMouseLeave={() => setHoveredIndex(null)}
                                                            className="min-w-[1.5rem] min-h-[1.5rem] max-w-[1.5rem] max-h-[1.5rem] text-white rounded-md flex justify-center items-center bg-[#E82A41]"
                                                        >
                                                            <FaHouse size={13} />
                                                            {hoveredIndex === index && (
                                                                <div className=" z-10">
                                                                    <Title />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-2 text-white text-sm">36:53</td>
                                                    <td className="px-4 py-2 text-white text-sm">30</td>
                                                    <td className="px-4 py-2 text-white text-sm">1</td>
                                                    <td className="px-4 py-2 text-white text-sm">6</td>
                                                    <td className="px-4 py-2 text-white text-sm">9</td>
                                                    <td className="px-4 py-2 text-white text-sm">6</td>
                                                    <td className="px-4 py-2 text-white text-sm">5/21</td>
                                                    <td className="px-4 py-2 text-white text-sm">2/7</td>
                                                    <td className="px-4 py-2 text-white text-sm">10/10</td>
                                                    <td className="px-4 py-2 text-white text-sm">4</td>
                                                    <td className="px-4 py-2 text-white text-sm">7</td>
                                                    <td className="px-4 py-2 text-white text-sm">5</td>
                                                    <td className="px-4 py-2 text-white text-sm">4</td>
                                                    <td className="px-4 py-2 text-white text-sm">-9</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className="overflow-x-auto mt-4">
                                <table className="min-w-full border border-[#696969]">
                                    <thead className="p-3">
                                        <tr className="border-b border-b-[#696969]">
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">Bench</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">MIN</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">PTS</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">REB</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">AST</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">STL</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">BLK</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">FG</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">3PT</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">FT</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">OR</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">DR</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">TO</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">PF</th>
                                            <th className="px-4 py-2 text-left text-white text-sm font-semibold">+/-</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-[#222222]">
                                        {
                                            [1, 2, 3]?.map((i) => (
                                                <tr className="border-b border-b-[#696969]" key={i}>
                                                    <td className="px-4 py-2 flex items-center gap-x-2 text-white text-sm">
                                                        <img className="h-6 w-6 rounded-full" src={`https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg`} alt="S. Aldama" />
                                                        <span className="text-nowrap">S. Aldama</span>
                                                        <span className="ml-1 text-xs bg-red-500 text-white rounded px-1 text-nowrap">Center</span>
                                                    </td>
                                                    <td className="px-4 py-2 text-white text-sm">36:53</td>
                                                    <td className="px-4 py-2 text-white text-sm">30</td>
                                                    <td className="px-4 py-2 text-white text-sm">1</td>
                                                    <td className="px-4 py-2 text-white text-sm">6</td>
                                                    <td className="px-4 py-2 text-white text-sm">9</td>
                                                    <td className="px-4 py-2 text-white text-sm">6</td>
                                                    <td className="px-4 py-2 text-white text-sm">5/21</td>
                                                    <td className="px-4 py-2 text-white text-sm">2/7</td>
                                                    <td className="px-4 py-2 text-white text-sm">10/10</td>
                                                    <td className="px-4 py-2 text-white text-sm">4</td>
                                                    <td className="px-4 py-2 text-white text-sm">7</td>
                                                    <td className="px-4 py-2 text-white text-sm">5</td>
                                                    <td className="px-4 py-2 text-white text-sm">4</td>
                                                    <td className="px-4 py-2 text-white text-sm">-9</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                </div>


            </div>

        </div >

    );
};

const Title = () => {
    return (
        <div className="bg-[#E82A41] text-white flex justify-center items-center flex-col p-3 z-10 absolute w-[20rem] shadow-xl rounded-md">
            <img src={player} alt="" />
            <p className="text-lg mt-1">D. Bane</p>
            <p>Houston Rockets</p>
            <div className="flex justify-center text-[#E82A41] items-center gap-x-5 bg-white rounded-md w-[100%] py-2">
                <FaHouse className="text-[#E82A41]" size={20} />
                <div>
                    <p>Homecoming</p>
                    <p className="text-black">Playing near to Home Town</p>
                </div>
            </div>
        </div>
    )
}

export default Details;
