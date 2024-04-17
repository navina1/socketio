import React from 'react'
import GenderCheckBox from "./GenderCheckBox.jsx";

function Signup() {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 bg-teal-800 rounded-lg bg-clip-padding  backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100'>
                <h1 className='text-3xl font-semibold text-center text-gray-300 '>
                    SIGNUP
                    <span className='text-purple-900'>  ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>FullName</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter fullname'
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div>
                        <label className='label p-2 text-black'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <GenderCheckBox/>
                    <a href='#' className='text-sm hover:underline text-white hover:text-blue-700 mt-2 inline-block'>
                        Already have an account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>SIGNUP</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup