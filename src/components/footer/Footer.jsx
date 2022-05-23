import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#12131c] text-white'>
        <h3 className='font-bold text-lg p-8'>Latest Blog posts</h3>
        <button className='text-[#6bc909] text-xl font-bold bg-transparent border-2 p-3 m-8 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]'>SEE MORE BLOGS</button>
        <div className='bg-[#43444b] w-[50%] h-[1px] mt-4 mb-4 m-[auto]'></div>

        <h3 className='font-bold text-xl p-4'>Stay in the loop</h3>
        <div className='md:w-[50%] md:m-auto'>
        <p className='font-semibold text-lg p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa faucibus fringilla et at lectus vitae purus. Mauris felis mattis at nisi enim purus, ac blandit tristique.</p>
        </div>
        <input className='pl-16 py-3 rounded-lg mb-4 w-[280px]' type="email" placeholder='Your email address' /> <br></br>
        <button className='text-[#6bc909] w-[200px] text-xl font-bold bg-transparent border-2 p-3 m-8 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]'>SIGN UP</button>
        <div className='bg-[#43444b] w-[50%] h-[1px] mt-4 mb-4 m-[auto]'></div>

        <h3 className='font-bold text-xl p-4'>Join the community</h3>
        <div className='flex justify-center items-center p-8'>
            <img className='mx-4 md:w-[5%] cursor-pointer' src="https://dev.mecarreira.com/static/media/twitter.7e8d40d4c7aa6e6a0630eec605e4fbb5.svg" alt="" />
            <img className='mx-4 md:w-[5%] cursor-pointer' src="https://dev.mecarreira.com/static/media/discord.d0c886d55ce65e2a9df3be21336efcc4.svg" alt="" />
            <img className='mx-4 md:w-[5%] cursor-pointer'src="https://dev.mecarreira.com/static/media/Instagram.02bca3973a3cff15393f0b6855dad961.svg" alt="" />
            <img className='mx-4 md:w-[5%] cursor-pointer' src="https://dev.mecarreira.com/static/media/youtube.7df565ff5027556a9ec673e790a6e6c1.svg" alt="" />
        </div>
        <div className='bg-[#43444b] w-[50%] h-[1px] mt-4 mb-4 m-[auto]'></div>

        <h3 className='font-bold text-xl p-2'>meCarreira.com</h3>
        <div className='md:w-[50%] md:m-auto'>
        <p className='font-semibold text-lg p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa faucibus fringilla et at lectus vitae purus. Mauris felis mattis at nisi enim purus, ac blandit tristique.</p>
        </div>
        <p className='font-semibold text-lg p-3'>About US</p>
        <p className='font-semibold text-lg p-3'>Team</p>
        <p className='font-semibold text-lg p-3'>Terms & Conditions</p>
        <p className='font-semibold text-lg p-3'>Privacy</p>
        <p className='font-semibold text-lg p-3'>Careers</p>
        <p className='font-semibold text-lg p-3'>Disclaimer</p>
        <div className='bg-[#43444b] w-[50%] h-[1px] mt-4 mb-4 m-[auto]'></div>

        <h3 className='font-bold text-lg p-2'>© 2022 meCarreira.com</h3>
    </div>
  )
}

export default Footer