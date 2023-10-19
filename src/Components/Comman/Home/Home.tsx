import React from 'react'
import InviteHome from '../../Card/InviteCard/InviteCard'
import DealOf from './Deal/DealOf'
import TopPick from './Top/TopPick'
import Brand from './brand/Brand'

const Home = () => {
    const data1 = "deal of the day";
    const data2 = "top picks";
    const data4 = "new in top brands";
  return (
    <>
      <InviteHome/>
    {/* <SimpleSlider/> */}
    <h1 className="data">{data1}</h1>
    <DealOf/>
    <h1 className="data">{data4}</h1>
    <Brand/>
    <h1 className="data">{data2}</h1>
    <TopPick/>
    
    </>
  
  )
}

export default Home