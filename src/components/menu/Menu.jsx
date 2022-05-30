import React,{useState,useEffect} from 'react'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Menu = () => {
  let mecauser = JSON.parse(localStorage.getItem('mecauser'));
  const [user,setUser] = useState();
  useEffect(() => {
      let mecalogin = JSON.parse(localStorage.getItem('mecalogin'));
       setUser(mecalogin);
  },[user])
  function login(){
    let mecalogin = JSON.parse(localStorage.getItem('mecalogin'));
    setUser(mecalogin);
  }
  return (
    <div className='bg-[#171923] text-center'>
        <div className='flex justify-between items-center p-2 px-8'>
            <Link to='/'><div className='text-white text-3xl'><BiLeftArrowAlt/></div></Link>
            <div>{user ? <Link to='/'><div className='cursor-pointer text-white font-semibold'>{mecauser.user}</div></Link> : <Link to='/'><div>
            <img src="data:image/png;base64,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" alt="" />
        </div></Link>}</div>
            <Link to='/'><div className='text-white font-semibold text-xl'><span>X</span></div></Link>
        </div>
        <div>{user ?   <div className='bg-[#171923 mt-8'>
        <Link to='/menu'><button className='text-[#6bc909] text-lg font-bold bg-transparent border-2 p-3 px-8 m-2 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]' onClick={() => {
          localStorage.setItem("mecalogin",JSON.stringify(false));
          localStorage.setItem("mecauser",JSON.stringify(""));
          login();
        }}>LOGOUT</button></Link>
        </div>: <div className='bg-[#171923 mt-8'>
        <div><a className='text-[#6bc909] text-lg font-bold bg-transparent border-2 p-3 px-8 m-2 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]' href='https://metamask.io/' rel='noreferrer' target='_blank'>CONNECT WALLET</a></div><br></br>
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