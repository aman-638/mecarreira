import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email:"",
    password:"",
    confirm_password:""
  });
  const changeHandler = (e) => {
    e.preventDefault();
    const {id,value} = e.target;
    setFormData({...formData,[id]:value});
    //console.log(formData);
  }
  const formSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://restapi.mecarreira.com/accounts/signup/`,formData).then((res) => {
      if(res.data.success){
        alert(res.data.message);
        navigate('/confirm');
      }else{
        alert(res.data.message);
      }
    }).catch((err) => {
      alert('something went wrong');
      console.log(err);
    })
  }
  return (
    <div className='bg-image'>
        <div className='flex w-[90%] m-auto md:ml-[40%] sign'>

          <div className='w-[380px] rounded-xl'>
             <div className='flex justify-evenly bg-[#171923] p-4 rounded-t-xl'>
               <div>
                  <p className='text-white font-bold'>Register</p>
                  <div className='m-auto bg-[#6bc909] h-[1px] mt-4'></div>
               </div>
               <Link to='/login'><div className='text-[#a0aaaf] font-bold'>
                 Login
               </div></Link>
             </div>
             <div className='bg-[#212435] rounded-b-xl h-[400px] md:h-[500px] overflow-y-scroll'>
                <form onSubmit={formSubmit}>
                <label className=' w-[80%] pt-4 flex m-auto text-[#a0aaaf] font-semibold'>Email</label>
                <input id='email' onChange={changeHandler} className=' w-[80%] flex m-auto p-3 rounded font-semibold bg-[#2c2f45] text-[#a0aaaf]  outline-none' type="email" placeholder='Enter Email' /><br></br>
                <label className=' w-[80%] flex m-auto text-[#a0aaaf] font-semibold'>Choose Password</label>
                <input id='password' onChange={changeHandler} className=' w-[80%] flex m-auto p-3 rounded font-semibold bg-[#2c2f45] text-[#a0aaaf]  outline-none' type="password" placeholder='Enter Password' /><br></br>
                <label className=' w-[80%] flex m-auto text-[#a0aaaf] font-semibold'>Confirm Password</label>
                <input id='confirm_password' onChange={changeHandler} className=' w-[80%] flex m-auto p-3 rounded font-semibold bg-[#2c2f45] text-[#a0aaaf]  outline-none' type="password" placeholder='Enter Password' /><br></br>
                 <input className=' cursor-pointer w-[80%] flex justify-center m-auto rounded-xl text-[#68c20b] border-[#68c20b] border-2 py-3 px-8 font-semibold bg-transparent hover:text-[#29990e] hover:border-[#29990e] my-6' type="submit" value="Sign Up" />
                </form>

                <p className='text-white font-semibold text-center'>Don't want an account?</p>
                <p className='text-white font-semibold text-center'>Connect your wallet directly</p>
                <div className='flex w-[70%] mt-6 mb-8 justify-center gap-4 items-center text-white border m-auto rounded p-2 py-3 hover:bg-[#75716c]'>
                  <img className='w-[20px] h-[20px]' src="https://dev.mecarreira.com/static/media/metamask.09e5f554ca7f2e9f93b4d3c237976b65.svg" alt="" />
                  <p className='font-bold '>METAMASK</p>
                  <HiOutlineArrowSmRight/>
                </div>
             </div>
          </div>

          <Link to="/"><div className='ml-4 text-center rounded-[50%] bg-white text-[black] text-lg font-bold w-[30px] h-[30px] hover:bg-[lightgray] cursor-pointer'><span>X</span></div></Link>
        </div>
    </div>
  )
}
