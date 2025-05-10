import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/logo.svg';
import frame70 from '../assets/frame70.png';
import frame88 from '../assets/frame88.png';
import { FaStar } from "react-icons/fa6";
import { PiRankingBold } from "react-icons/pi";
import { MdHomeFilled, MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { useState } from "react";
import Navbar from "../Navbar";


const FavoritesPage = () => {

    const [active, setActive] = useState(0)
    const nav = useNavigate()

    return (
        <div className='w-screen h-screen bg-[#051427] overflow-y-auto p-5'>

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


            <div className="flex justify-center items-center flex-col mt-5 w-[90%]">


                <div className="mt-5 flex items-center w-[100%]  gap-x-4 overflow-x-auto border-b-2 border-[#4d4d4d] pb-3">
                    <p onClick={() => setActive(0)} className={`${active == 0 ? "text-[#FB7F3F]" : "text-[#fff]"} cursor-pointer text-nowrap `}>Matches</p>
                    <p onClick={() => setActive(1)} className={`${active == 1 ? "text-[#FB7F3F]" : "text-[#fff]"} cursor-pointer text-nowrap `}>Season</p>
                    <p onClick={() => setActive(2)} className={`${active == 2 ? "text-[#FB7F3F]" : "text-[#fff]"} cursor-pointer text-nowrap `}>Teams</p>
                </div>

                {
                    active == 0 && (
                        <div>
                            <img src={frame70} alt="" className="mt-10" />
                            <img src={frame88} alt="" className="mt-10" />
                            <img src={frame70} alt="" className="mt-10" />
                            <img src={frame88} alt="" className="mt-10" />
                        </div>
                    )
                }

                {
                    active == 1 && (
                        <div className="w-[100%] mt-5">

                            {
                                [1, 2, 3].map((i) => (
                                    <div key={i} className="flex justify-between items-center bg-[#222222] p-3 rounded-md mt-5">
                                        <div className="flex items-center gap-3 w-[100%]">
                                            <img className="h-8" src={`https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg`} alt="" />
                                            <div className="flex flex-col">
                                                <span className="text-white font-medium">Regular Season</span>
                                                <span className="text-gray-400 text-xs">National Basketball Association (NBA)</span>
                                            </div>
                                        </div>
                                        <FaStar className="text-[#FB7F3F]" />
                                    </div>
                                ))
                            }

                        </div>

                    )
                }


                {
                    active == 2 && (
                        <div className="w-[100%] mt-5">

                            {
                                [1, 2, 3].map((i) => (
                                    <div key={i} className="flex justify-between items-center bg-[#222222] p-3 rounded-md mt-5">
                                        <div className="flex items-center gap-3 w-[100%]">
                                            <img className="h-8" src={`https://i.pinimg.com/736x/90/6e/51/906e51825875defc35d0c15899ddd22d.jpg`} alt="" />
                                            <div className="flex flex-col">
                                                <span className="text-white font-medium">Houston Rockets</span>
                                                <span className="text-gray-400 text-xs">National Basketball Association (NBA)</span>
                                            </div>
                                        </div>
                                        <FaStar className="text-[#FB7F3F]" />
                                    </div>
                                ))
                            }

                        </div>

                    )
                }


            </div>

        </div >
    );
};

export default FavoritesPage;
