import React from 'react'
import './Register.css'

export const Register = () => {
  return (
    <div className='bg-image'>
        <div className='flex w-[60%] m-auto sign'>

          <div className='rounded-lg w-[400px]'>
             <div className='flex justify-evenly bg-[#171923] p-4'>
               <div>
                  <p className='text-white font-bold'>Register</p>
                  <div className='m-auto bg-[#6bc909] h-[1px]'></div>
               </div>
               <div className='text-[#a0aaaf] font-bold'>
                 Login
               </div>
             </div>
             <div className='bg-[#212435]'>
                <form action="">
                <label className=' w-[80%] flex m-auto text-[#a0aaaf]'>Email</label>
                <input className=' w-[80%] flex m-auto bg-[#2c2f45] outline-none' type="email" placeholder='Enter Email' /><br></br>
                <label className=' w-[80%] flex m-auto text-[#a0aaaf]'>Choose Password</label>
                <input className=' w-[80%] flex m-auto bg-[#2c2f45] outline-none' type="password" placeholder='Enter Password' /><br></br>
                <label className=' w-[80%] flex m-auto text-[#a0aaaf]'>Confirm Password</label>
                <input className=' w-[80%] flex m-auto bg-[#2c2f45] outline-none' type="password" placeholder='Enter Password' /><br></br>
                 <input className='' type="submit" value="Sign Up" />
                </form>
             </div>
          </div>

          <div className='ml-4 text-center rounded-[50%] bg-white text-[black] text-lg font-bold w-[30px] h-[30px] hover:bg-[lightgray]'><span>X</span></div>
        </div>
    </div>
  )
}
