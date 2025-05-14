import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-screen h-screen bg-[#051427] flex justify-center items-center">
            <form className="bg-white p-8 rounded-lg shadow-md w-[25rem]">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#051427]">Login</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <Link to={"/register"}>
                    <p className='mb-2 text-right'>Don't have and account <span className=' text-blue-600 cursor-pointer'>Register ?</span></p>
                </Link>

                <Link to={"/home"}><button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200">Login</button></Link>

            </form>
        </div>
    );
};

export default Login;
