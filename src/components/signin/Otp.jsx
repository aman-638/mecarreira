import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";

export const Otp = () => {
   const navigate = useNavigate();
   let meca = JSON.parse(localStorage.getItem('meca'));
   const [OTP,setOTP] = useState("");

   let formData={
    email:meca.email,
    password:meca.password,
    otp:OTP
  }
  // const changeHandler = (e) => {
  //   e.preventDefault();
  //   setOTP(e.target.value);
  //   console.log(OTP);
  // }
  //console.log(OTP)
  const formSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://restapi.mecarreira.com/accounts/login/`,formData).then((res) => {
      if(res.data.success){
        alert(res.data.message);
        localStorage.setItem("mecauser",JSON.stringify(res.data.data));
        navigate('/');
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
        <div className='flex w-[90%] m-auto md:ml-[40%] sign '>

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
             <div className='bg-[#212435] rounded-b-xl h-[450px] md:h-[500px]'>
                <h1 className='text-white font-bold text-center text-2xl pt-20'>Enter OTP</h1>

                <p className='text-white font-semibold text-center text-lg mt-8'>Please enter the OTP</p>
                <p className='text-white font-semibold text-center text-lg '>received on your</p>
                <p className='text-white font-semibold text-center text-lg '>Registered E-mail ID.</p>

                <form onSubmit={formSubmit}>
                <OTPInput className="w-[80%] flex m-auto mt-4 " value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false}  />
                 {/* <input type="number" id='otp' onChange={changeHandler} className='flex w-[80%] m-auto mt-8 p-3 outline-none' /> */}
                 <input className=' cursor-pointer w-[80%] flex justify-center m-auto rounded-xl text-[black] bg-[#81df0d] py-3 px-8 font-semibold  hover:bg-[#68c20b] my-6 mt-10' type="submit" value="Done" />
                </form>

                <div className='text-center p-4'>
                   <p className='text-white font-bold'> Didn’t get the OTP?<span className='text-center cursor-pointer text-[#73c512] underline'>Resend</span></p>
                </div>
             </div>
          </div>

          <Link to="/"><div className='ml-4 text-center rounded-[50%] bg-white text-[black] text-lg font-bold w-[30px] h-[30px] hover:bg-[lightgray] cursor-pointer'><span>X</span></div></Link>
        </div>
    </div>
  )
}
