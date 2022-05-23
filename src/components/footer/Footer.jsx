import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#12131c] text-white'>
        <h3 className='font-bold text-lg p-8'>Latest Blog posts</h3>
        <button className='text-[#6bc909] text-xl font-bold bg-transparent border-2 p-3 m-8 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]'>SEE MORE BLOGS</button>
        <div className='bg-[#43444b] w-[50%] h-[1px] mt-4 mb-4 m-[auto]'></div>

        <h3 className='font-bold text-xl p-4'>Stay in the loop</h3>
        <p className='font-semibold text-lg p-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa faucibus fringilla et at lectus vitae purus. Mauris felis mattis at nisi enim purus, ac blandit tristique.</p>
        <input className='pl-16 py-3 rounded-lg mb-4 w-[280px]' type="email" placeholder='Your email address' /> <br></br>
        <button className='text-[#6bc909] w-[200px] text-xl font-bold bg-transparent border-2 p-3 m-8 border-[#29990e] hover:bg-[#81df0d] hover:text-[#12131c]'>SIGN UP</button>
        <div className='bg-[#43444b] w-[50%] h-[1px] mt-4 mb-4 m-[auto]'></div>

        

    </div>
  )
}

export default Footer