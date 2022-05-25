import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../signup/Register.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Confirm = () => {
    const navigate = useNavigate();
  const [formData,setFormData] = useState({
      id:"",
      token:"",
  });
  const changeHandler = (e) => {
    e.preventDefault();
    const {id,value} = e.target;
    setFormData({...formData,[id]:value});
    //console.log(formData);
  }
 // ${formData.id}/${formData.token}
  const formSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://dev.mecarreira.com/accounts/verify/email/`,formData).then((res) => {
      if(res.data.success){
        alert(res.data.message);
        navigate('/login');
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

             <div className='bg-[#212435] rounded-xl h-[450px] md:h-[500px]'>
                <h1 className='text-white font-bold text-center text-2xl pt-6'>Verify your email</h1>

                <p className='text-white font-semibold text-center text-lg mt-8'>We have sent an token</p>
                <p className='text-white font-semibold text-center text-lg '>to your email</p>
                <p className='text-white font-semibold text-center text-lg '>Please verify your Email.</p>

                <form onSubmit={formSubmit}>
                <p className='text-white font-semibold text-center text-lg mt-6'>Please Enter the id</p>
                 <input type="text" id='id' onChange={changeHandler} className='flex w-[80%] m-auto  p-2 outline-none bg-[#2c2f45] text-[#75716c]' />
                 <p className='text-white font-semibold text-center text-lg '>Please Enter the token</p>
                 <input type="text" id='token' onChange={changeHandler} className='flex w-[80%] m-auto  p-2 outline-none bg-[#2c2f45] text-[#75716c]' />
                 <input className=' cursor-pointer w-[80%] flex justify-center m-auto rounded-xl text-[black] bg-[#81df0d] py-3 px-8 font-semibold  hover:bg-[#68c20b] my-6 mt-10' type="submit" value="Done" />
                </form>

                <div className='text-center p-4'>
                   <p className='text-white font-bold'>didn’t get the verification email?<span className='text-center cursor-pointer text-[#73c512] underline'>Resend</span></p>
                </div>
             </div>
          </div>

          <Link to="/"><div className='ml-4 text-center rounded-[50%] bg-white text-[black] text-lg font-bold w-[30px] h-[30px] hover:bg-[lightgray] cursor-pointer'><span>X</span></div></Link>
        </div>
    </div>
  )
}

export default Confirm