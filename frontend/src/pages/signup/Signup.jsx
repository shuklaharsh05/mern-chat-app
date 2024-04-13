import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

function SignUp() {

  const [inputs, setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center w-96 max-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding text-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h3 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='text-yellow-500 italic'> WeCHAT</span>
        </h3>
        <form onSubmit={handleSubmit}>
        <div>
          <label className=' label p-2'>
            <span className='text-base label-text text-white'>Full name</span>
          </label>
          <input type="text" placeholder="fullname
          "className="input input-bordered w-full max-w-xs"
          value={inputs.fullName}
          onChange={(e)=> setInputs({...inputs,fullName: e.target.value})}
          />
          </div>

          <div>
          <label className=' label p-2'>
            <span className='text-base label-text text-white'>Username</span>
          </label>
          <input type="text" placeholder="Enter Username
          "className="input input-bordered w-full max-w-xs"
          value={inputs.username}
          onChange={(e)=>setInputs({...inputs,username: e.target.value})}
          />
          </div>

          <div>
          <label className=' label p-2'>
            <span className='text-base label-text text-white'>Password</span>
          </label>
          <input type="password" placeholder="Enter Password
          "className="input input-bordered w-full max-w-xs"
          value={inputs.password}
          onChange={(e)=>setInputs({...inputs,password: e.target.value})}
          />
          </div>

          <div>
          <label className=' label p-2'>
            <span className='text-base label-text text-white'>Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm Password
          "className="input input-bordered w-full max-w-xs"
          value={inputs.confirmPassword}
          onChange={(e)=>setInputs({...inputs,confirmPassword: e.target.value})}
          />
          </div>
          <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Already"} have an account?</Link>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>
          <div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
        </form>
      </div>
      
    </div>
  )
}

export default SignUp