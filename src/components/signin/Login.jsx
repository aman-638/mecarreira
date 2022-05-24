import React from 'react'
import { Link } from 'react-router-dom'
import '../signup/Register.css'
import {HiOutlineArrowSmRight} from 'react-icons/hi'

const Login = () => {
  return (
    <div className='bg-image'>
        <div className='flex w-[90%] m-auto md:ml-[40%] sign'>

          <div className='w-[380px] rounded-xl'>
             <div className='flex justify-evenly bg-[#171923] p-4 rounded-t-xl'>
               <Link to='/register'><div className='text-[#a0aaaf] font-bold'>
                   Register
               </div></Link>
               <Link to='/login'><div>
                  <p className='text-white font-bold'>Login</p>
                  <div className='m-auto bg-[#6bc909] h-[1px] mt-4'></div>
               </div></Link>
             </div>
             <div className='bg-[#212435] rounded-b-xl h-[400px] md:h-[500px]'>
                <form action="">
                <label className=' w-[80%] pt-4 flex m-auto text-[#a0aaaf] font-semibold'>Email</label>
                <input className=' w-[80%] flex m-auto p-3 rounded font-semibold bg-[#2c2f45] text-[#a0aaaf]  outline-none' type="email" placeholder='Enter Email' /><br></br>
                <label className=' w-[80%] flex m-auto text-[#a0aaaf] font-semibold'>Choose Password</label>
                <input className=' w-[80%] flex m-auto p-3 rounded font-semibold bg-[#2c2f45] text-[#a0aaaf]  outline-none' type="password" placeholder='Enter Password' /><br></br>
                
                 <input className='w-[80%] flex justify-center m-auto rounded-xl text-[#68c20b] border-[#68c20b] border-2 py-3 px-8 font-semibold bg-transparent hover:text-[#29990e] hover:border-[#29990e] my-6' type="submit" value="Sign In" />
                </form>

                <p className='text-white font-semibold text-center'>Want to connect your wallet instead?</p>

                <div className='flex w-[70%] mt-6 mb-8 justify-center gap-4 items-center text-white border m-auto rounded p-2 py-3 hover:bg-[#75716c]'>
                  <img className='w-[20px] h-[20px]' src="https://dev.mecarreira.com/static/media/metamask.09e5f554ca7f2e9f93b4d3c237976b65.svg" alt="" />
                  <p className='font-bold '>METAMASK</p>
                  <HiOutlineArrowSmRight/>
                </div>

                <div>
                    <p className='text-center cursor-pointer text-[#73c512] underline'>Forget Password</p>
                </div>
             </div>
          </div>

          <Link to="/"><div className='ml-4 text-center rounded-[50%] bg-white text-[black] text-lg font-bold w-[30px] h-[30px] hover:bg-[lightgray] cursor-pointer'><span>X</span></div></Link>
        </div>
    </div>
  )
}

export default Login