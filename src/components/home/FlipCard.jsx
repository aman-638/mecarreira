import React from 'react';
import './Home.css';

const FlipCard = () => {
  return (
   <div className="card">
     <div className="card-side front">
       <div>
          <p className='text-[#65ba11] text-3xl font-semibold'>Opportunity to bid on exclusive NFTs</p>
          <p>Lectus aenean turpis in penatibus mauris. Nulla nisi volutpat, praesent velit. Congue adipiscing nunc, placerat ac, in amet.</p>
       </div>
     </div>
     <div className="card-side back">
       <div>
          <p className='text-[#65ba11] text-3xl font-semibold'>Opportunity to bid on exclusive NFTs</p>
          <p>Lectus aenean turpis in penatibus mauris. Nulla nisi volutpat, praesent velit. Congue adipiscing nunc, placerat ac, in amet.</p>
       </div>
     </div>
    </div>
  )
}

export default FlipCard