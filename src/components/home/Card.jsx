import React from 'react'

const Card = () => {
  return (
    <div className=''>
           {/* card */}
      <div className='rounded-lg flex-row justify-center content-center w-[220px] md:w-[300px] h-[420px] md:h-[500px] m-auto bg-white my-4'>
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
    </div>
  )
}

export default Card