import React from 'react'
import InviteHome from '../../Card/InviteCard/InviteCard'
import DealOf from './Deal/DealOf'
import TopPick from './Top/TopPick'
import Brand from './brand/Brand'
import ImgSlider from '../../Carousel/Carousel'


const Home = () => {
    const data1 = "deal of the day";
    const data2 = "top picks";
    const data4 = "new in top brands";
  
  return (
    <>
      <InviteHome/>
   
    <ImgSlider/>
    <h1 className="data">{data1}</h1>
  
    <DealOf/>
    <div className="brand-container">
    <h1 className="data">{data4}</h1>
    <Brand/>
    </div>
    
    <h1 className="data">{data2}</h1>
    <TopPick/>

    </>
  
  )
}

export default Home