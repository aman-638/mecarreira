import React from 'react'
import Card from './Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Home = () => {
    const responsive = {
        // superLargeDesktop: {
        //   // the naming can be any, depends on you.
        //   breakpoint: { max: 4000, min: 3000 },
        //   items: 5
        // },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='text-center'>
     <Navbar/>
     <div class="bg-[url('https://dev.mecarreira.com/static/media/stadium-min.0bf389f4541aa97274cd.png')] object-cover">
        <h1 className='text-white font-bold text-3xl p-4' >Get a digital piece of your favorite player</h1>
        <p className='text-white p-4 font-semibold py-8'>Buy the player coin to unlock access to exclusive content</p>
        <Link to='/register' ><button className='text-[#68c20b] border-[#68c20b] border-2 py-3 px-8 w-[200px] font-bold bg-transparent hover:bg-[#81df0d] hover:text-[#12131c] my-6'>SIGN UP</button></Link>
        <h1 className='text-white font-bold text-3xl p-4' >New Launches</h1>
           {/* card */}
        <div className='w-[65%] m-auto'>
        <Carousel responsive={responsive} showDots={true} autoPlay={false}>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
         </Carousel>;
        </div>

        <p className='font-semibold text-lg p-3 text-white my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       <p className='text-[#65ba11] underline font-bold cursor-pointer pb-8'>VIEW ALL</p>
     </div>


    <div className='bg-[#12131c]'>
      <h3 className='font-bold text-lg p-8 text-white'>Latest created NFT’s</h3>
       
       {/* card */}
       <div className='w-[65%] m-auto'>
        <Carousel responsive={responsive} showDots={true} autoPlay={false}>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
         </Carousel>;
        </div>

      <p className='font-semibold text-lg p-3 text-white my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p className='text-[#65ba11] underline font-bold cursor-pointer'>VIEW ALL</p>
    </div>
    <Footer/>
    </div>
  )
}

export default Home