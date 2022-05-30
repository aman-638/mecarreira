import React,{useState,useEffect} from 'react'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Menu = () => {
  let mecauser = JSON.parse(localStorage.getItem('mecauser'));
  const [user,setUser] = useState();
  useEffect(() => {
      setInterval(() => {
        let mecalogin = JSON.parse(localStorage.getItem('mecalogin'));
        setUser(mecalogin);
    },1000)
  },[user])
  return (
    <div className='bg-[#171923] text-center'>
        <div className='flex justify-between items-center p-2 px-8'>
            <Link to='/'><div className='text-white text-3xl'><BiLeftArrowAlt/></div></Link>
            <Link to='/'><div className='cursor-pointer text-white font-semibold'>{mecauser.user}</div></Link>
            <Link to='/'><div className='text-white font-semibold text-xl'><span>X</span></div></Link>
        </div>
        <div>{user ?   <div className='bg-[#171923 mt-8'>
             <div><a className='text-[#6bc909] text-lg font-bold bg-transparent border-2 p-3 px-8 m-2 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]' href='https://metamask.io/' rel='noreferrer' target='_blank'>CONNECT WALLET</a></div>  <br></br>
        <Link to='/menu'><button className='text-[#6bc909] text-lg font-bold bg-transparent border-2 p-3 px-8 m-2 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]' onClick={() => {
          localStorage.setItem("mecalogin",JSON.stringify(false));
          localStorage.setItem("mecauser",JSON.stringify(""));
        }}>LOGOUT</button></Link>
        </div>: <div className='bg-[#171923 mt-8'>
        <button className='text-[#6bc909] text-lg font-bold bg-transparent border-2 p-3 px-8 m-2 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]'>CONNECT WALLET</button><br></br>
        <Link to='/register'><button className='text-[#6bc909] text-lg font-bold bg-transparent border-2 p-3 px-8 m-2 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]'>SIGN UP / SIGN IN</button></Link>
        </div>}</div>

        <div>
        <div className='flex w-[30%] justify-between mt-8 font-semibold text-lg m-auto items-center text-[#6bc909]'>
                <p className='cursor-pointer'>Language English</p>
                <p className='text-3xl cursor-pointer '><MdKeyboardArrowRight/></p>
            </div>
            <div className='flex w-[30%] my-2 font-semibold text-lg m-auto justify-between items-center text-[#74828b] hover:text-[#6bc909]'>
                <p className='cursor-pointer'>Launch your own Player Coin</p>
                <p className='text-3xl cursor-pointer '><MdKeyboardArrowRight/></p> 
            </div>
            <div className='flex w-[30%] my-2 font-semibold text-lg m-auto justify-between items-center text-[#74828b] hover:text-[#6bc909]'>
                <p className='cursor-pointer'>Ongoing Subscriptions</p>
                <p className='text-3xl cursor-pointer '><MdKeyboardArrowRight/></p>
            </div>
            <div className='flex w-[30%] my-2 font-semibold text-lg m-auto justify-between items-center text-[#74828b] hover:text-[#6bc909]'>
                <p className='cursor-pointer'>Latest created NFT’s</p>
                <p className='text-3xl cursor-pointer '><MdKeyboardArrowRight/></p>
            </div>
        </div>
       
        <div className='bg-[#43444b] w-[30%] h-[1px] mt-4 mb-4 m-[auto]'></div>

       <div className='text-[#a7acb5] font-semibold w-[30%] m-auto'>
        <p className='text-left cursor-pointer py-1 hover:text-[#6bc909]'>About Us</p>
        <p className='text-left cursor-pointer py-1 hover:text-[#6bc909]'>Team</p>
        <p className='text-left cursor-pointer py-1 hover:text-[#6bc909]'>Terms & Conditions</p>
        <p className='text-left cursor-pointer py-1 hover:text-[#6bc909]'>Privacy</p>
        <p className='text-left cursor-pointer py-1 hover:text-[#6bc909]'>Careers</p>
        <p className='text-left cursor-pointer py-1 hover:text-[#6bc909]'>Disclaimer</p>
       </div>
    
        <div className='bg-[#43444b] w-[30%] h-[1px] mt-4 mb-4 m-[auto]'></div>
        <h3 className='font-bold text-xl p-4 text-white'>Join the community</h3>
        <div className='flex justify-center items-center p-2 pb-10'>
            <img className='mx-2 md:w-[5%] cursor-pointer' src="https://dev.mecarreira.com/static/media/twitter.7e8d40d4c7aa6e6a0630eec605e4fbb5.svg" alt="" />
            <img className='mx-2 md:w-[5%] cursor-pointer' src="https://dev.mecarreira.com/static/media/discord.d0c886d55ce65e2a9df3be21336efcc4.svg" alt="" />
            <img className='mx-2 md:w-[5%] cursor-pointer'src="https://dev.mecarreira.com/static/media/Instagram.02bca3973a3cff15393f0b6855dad961.svg" alt="" />
            <img className='mx-2 md:w-[5%] cursor-pointer' src="https://dev.mecarreira.com/static/media/youtube.7df565ff5027556a9ec673e790a6e6c1.svg" alt="" />
            </div>       
    </div>
  )
}

export default Menu