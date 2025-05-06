import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/logo.svg';
import frame70 from '../assets/frame70.png';
import frame88 from '../assets/frame88.png';
import HeaderImg from '../assets/image.png';
import { PiCalendarDot, PiRankingBold } from "react-icons/pi";
import { MdHomeFilled, MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import {
    MdSearch,
    MdStar,
    MdChevronRight,
} from 'react-icons/md';
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

const LandingPage = () => {

    const nav = useNavigate()
    return (
        <div className='w-screen h-screen bg-[#051427] overflow-y-auto p-5'>

            <div className={`w-[100%] flex justify-between items-center flex-wrap`}>

                <div className='flex items-center gap-x-2 md:gap-x-7 cursor-pointer'>
                    <div className='w-[2rem] h-[2rem] bg-[#fff] flex lg:hidden justify-center items-center rounded-md text-black'>
                        <GiHamburgerMenu className={`cursor-pointer md:mt-0`} onClick={() => toggleNav(!isNavOpen)} />
                    </div>
                    <img src={Logo} alt="" />
                    <div className='flex items-center gap-x-1 md:gap-x-3 text-[#FB7F3F]'>
                        <MdHomeFilled />
                        <p>Home</p>
                    </div>
                    <div className='flex items-center gap-x-1 md:gap-x-3 text-[#fff]'>
                        <PiRankingBold />
                        <p>Favorites</p>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-x-4 text-white'>
                    <IoIosSettings className='cursor-pointer' />
                </div>

            </div>

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

            <div className='mt-4 flex justify-center items-center'>
                <img src={HeaderImg} alt="" className=' bg-cover' />
            </div>


            <div className="lg:flex gap-x-10 items-start mt-6">

                <div className="lg:block hidden">

                    <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
                        <MdSearch className="text-gray-400 mr-2" size={20} />
                        <input type="text" placeholder="Search" className="bg-transparent text-white placeholder:text-gray-400 focus:outline-none w-full" />
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6 py-6">
                        {/* Seasons Section */}
                        <div>
                            <h2 className="text-sm font-semibold text-gray-400 px-2 mb-2">SEASONS</h2>
                            <div className="space-y-2">
                                {seasons.map((season, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3">
                                        <div className="flex items-center gap-x-2">
                                            <img className='h-[1.7rem] rounded-md' src="https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg" alt="" />
                                            <span className="text-white text-sm">{season.name}</span>
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
                            <h2 className="text-sm font-semibold text-gray-400 px-2 mb-2">TEAMS</h2>
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
                                            <MdChevronRight className="text-gray-400" size={20} />
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
                                <span className="text-gray-400 text-xs">National Basketball Association (NBA)</span>
                            </div>
                        </div>

                        <div></div>
                        <div className="text-gray-400 text-sm">Quarter Finals</div>
                    </div>

                    <div className="mt-4 flex items-center justify-between flex-wrap text-white">

                        <div className="flex items-center gap-x-2">
                            <button className="bg-[#FB7F3F] px-4 py-1 rounded-md">Live</button>
                            <MdOutlineChevronLeft />
                        </div>

                        <p>Today</p>

                        <div className="flex items-center gap-x-2">
                            <PiCalendarDot/>
                            <MdOutlineChevronRight />
                        </div>

                    </div>

                    <img onClick={()=>nav("/details")} src={frame70} alt="" className="mt-5 cursor-pointer" />
                    <img onClick={()=>nav("/details")} src={frame88} alt="" className="mt-5 cursor-pointer" />
                    <img onClick={()=>nav("/details")} src={frame70} alt="" className="mt-5 cursor-pointer" />
                    <img onClick={()=>nav("/details")} src={frame88} alt="" className="mt-5 cursor-pointer" />


                </div>


            </div>

        </div >
    );
};

export default LandingPage;
