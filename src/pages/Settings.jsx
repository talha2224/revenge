import React, { useState } from 'react'
import Navbar from '../Navbar'
import { FaChevronDown } from 'react-icons/fa'

const Settings = () => {

    const [step, setStep] = useState(0);

    return (

        <div className='w-screen h-screen bg-[#051427] overflow-y-auto p-5 flex items-center flex-col'>

            <Navbar />

            {
                step === 0 &&
                <div className='bg-[#222222] p-5  mt-[5rem] rounded-md w-[30rem] text-white flex items-center flex-col'>
                    <h1>Settings</h1>
                    <p className='text-sm text-gray-700'>Manage Prefences</p>

                    <div className='w-[100%] my-3'>

                        <div className='bg-white w-[100%] p-2 text-sm my-5 rounded-md flex justify-between items-center cursor-pointer text-black'>
                            <div></div>
                            <div>
                                <p>UTC +5:00</p>
                            </div>
                            <div>
                                <FaChevronDown />
                            </div>
                        </div>

                        <h1>Documentation</h1>

                        <div onClick={() => setStep(1)} className='bg-white w-[100%] p-2 text-sm mt-5 rounded-md flex justify-between items-center cursor-pointer text-black'>
                            <div>
                                <p>Terms and Condition</p>
                            </div>
                            <div>
                                <FaChevronDown />
                            </div>
                        </div>
                        <div onClick={() => setStep(2)} className='bg-white w-[100%] p-2 text-sm mt-3 rounded-md flex justify-between items-center cursor-pointer text-black'>
                            <div>
                                <p>Privacy and Policy</p>
                            </div>
                            <div>
                                <FaChevronDown />
                            </div>
                        </div>

                        <button className='bg-[#FB7F3F] text-white rounded-md py-2 px-3 mt-5 text-sm w-[100%]'>Save Changes</button>
                    </div>

                </div>
            }
            {
                step === 1 &&
                <div className='bg-[#222222] p-5 max-h-[30rem] overflow-y-auto  mt-[5rem] rounded-md w-[30rem] text-white flex items-center flex-col'>
                    <h1>Terms & Conditions</h1>

                    <div className='w-[100%] my-3'>

                        <p className='bg-white w-[100%] p-2 text-sm text-black my-5 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum saepe odio dolorum rerum non vel minus iste vitae, neque nulla. Mollitia quo sequi, omnis necessitatibus iste quia in asperiores provident? Dicta sapiente eaque repellat voluptatum! Explicabo autem eum deleniti harum odit, error porro animi beatae illo aspernatur, ipsum similique.</p>

                        <button onClick={() => setStep(0)} className='bg-[#FB7F3F] text-white rounded-md py-2 px-3 mt-3 text-sm w-[100%]'>Save Changes</button>
                    </div>

                </div>
            }
            {
                step === 2 &&
                <div className='bg-[#222222] p-5 max-h-[30rem] overflow-y-auto  mt-[5rem] rounded-md w-[30rem] text-white flex items-center flex-col'>
                    <h1>Privacy & Policy</h1>

                    <div className='w-[100%] my-3'>

                        <p className='bg-white w-[100%] p-2 text-sm text-black my-5 rounded-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum, inventore sed architecto qui ullam soluta deserunt. Odio commodi libero quae provident inventore tempore? Eveniet ipsum culpa corrupti earum, nesciunt omnis quisquam nisi, voluptates tempora labore suscipit voluptatum esse, expedita ipsa dolores. Ex quasi odit accusamus facere nemo consequuntur quam natus aperiam, est eum doloribus, aut libero dolorum nulla corrupti! Quisquam id provident sapiente. Aut, delectus labore commodi eius autem enim ut vitae obcaecati. Velit consequatur laudantium voluptas quasi animi quos ab distinctio deleniti, repellat laborum nihil cum facere totam nisi nostrum minima nobis optio in tenetur, saepe cumque eum!</p>

                        <button onClick={() => setStep(0)} className='bg-[#FB7F3F] text-white rounded-md py-2 px-3 mt-3 text-sm w-[100%]'>Save Changes</button>
                    </div>

                </div>
            }

        </div>

    )
}

export default Settings
