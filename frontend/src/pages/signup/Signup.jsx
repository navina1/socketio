import React from 'react'
import GenderCheckBox from "./GenderCheckBox.jsx";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup.js';

function Signup() {
    const [data, setData] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    const {signupfunction,loading}=useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signupfunction(data)
    }
    const handleCheckBox = (value) => {
        setData({ ...data, "gender": value })
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 bg-teal-800 rounded-lg bg-clip-padding  backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100'>
                <h1 className='text-3xl font-semibold text-center text-gray-300 '>
                    SIGNUP
                    <span className='text-purple-900'>  ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>FullName</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter fullname'
                            className='w-full input input-bordered h-10'
                            required
                            value={data.fullName}
                            onChange={(e) => setData({ ...data, fullName: e.target.value })}
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
                            value={data.userName}
                            onChange={(e) => setData({ ...data, userName: e.target.value })}
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
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
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
                            value={data.confirmPassword}
                            onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                        />
                    </div>
                    <GenderCheckBox onCheckboxChange={handleCheckBox} selectedGender={data.gender} />
                    <Link to='/login' className='text-sm hover:underline text-white hover:text-blue-700 mt-2 inline-block'>
                        Already have an account?
                    </Link>
                    <div>
                        <button 
                            className='btn btn-block btn-sm mt-2'
                            disabled={loading}
                        >
                            { loading ?
                                <span className='loading loading-spinner'></span>   
                                :"SIGNUP"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup