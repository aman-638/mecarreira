import React from 'react'
import Card from './Card'

const Home = () => {
  return (
    <div>

     <div class="bg-[url('https://dev.mecarreira.com/static/media/stadium-min.0bf389f4541aa97274cd.png')] object-cover">
        <h1 className='text-white font-bold text-3xl p-4' >Get a digital piece of your favorite player</h1>
        <p className='text-white p-4 font-semibold'>Buy the player coin to unlock access to exclusive content</p>
        <button className='text-[#68c20b] border-[#68c20b] border-2 py-3 px-8 w-[200px] font-bold bg-transparent hover:bg-[#81df0d] hover:text-[#12131c]'>SIGN UP</button>
           {/* card */}
       <div className='rounded-lg flex-row justify-center content-center w-[300px] h-[500px] m-auto bg-white'>
          <div>
            <img className='w-[300px] rounded-t-lg' src="https://dev.mecarreira.com/static/media/3-min.de0678c6166164e2ed6f.png" alt="" />
          </div>
          <div className='text-left p-4'>
             <div className='text-[#848692] px-1'><p>Joe Cheeo Sanchez</p></div>
             <div><p className='font-bold text-lg px-1 text-[#342f45]'>Football Jersey</p></div>
             <div><p className='font-bold text-lg px-1 text-[#342f45]'>#351</p></div>
             <div className='w-[95%] m-auto h-[1px] bg-[gray] my-4'></div>
             <div className='flex justify-between p-1 text-[#2c3150] font-bold'>
                <p>owner:</p>
                <p>0x234234235..</p>
             </div>
             <div className='flex justify-between p-1 text-[#2c3150] font-bold'>
                <p>Mint Date:</p>
                <p>16.02.2022</p>
             </div>
          </div>
      </div>

        <p className='font-semibold text-sm p-3 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className='text-[#65ba11] underline font-bold cursor-pointer'>VIEW ALL</p>
     </div>


    <div className='bg-[#12131c]'>
      <h3 className='font-bold text-lg p-8 text-white'>Latest created NFT’s</h3>
       
       {/* card */}
       <div className=' grid grid-rows-1'>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
       </div>

      <p className='font-semibold text-lg p-3 text-white my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p className='text-[#65ba11] underline font-bold cursor-pointer'>VIEW ALL</p>
    </div>
    </div>
  )
}

export default Home