import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

function Login() {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const {loading,login}=useLogin();


    const handleSubmit= async (e)=>{
        e.preventDefault();
        await login(userName, password);
    }


    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 bg-teal-800 rounded-lg bg-clip-padding  backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
                <h1 className='text-3xl font-semibold text-center text-gray-300 '>
                    LOGIN
                    <span className='text-purple-900'>  ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2 text-black'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10'
                            required
                            value={userName}
                            onChange={(e)=>{ setUserName(e.target.value) }}
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
                            required
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <Link to='/signup' className='text-sm hover:underline text-white hover:text-blue-700 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>
                    <div>
                        <button 
                            className='btn btn-block btn-sm mt-2'
                            disabled={loading}
                        >
                            { loading ? <span className='loading loading-spinner'></span>: "Login" }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login