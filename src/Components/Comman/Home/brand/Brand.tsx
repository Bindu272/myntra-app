import React, { useState } from 'react'
import './brand.scss'
import { brands } from './BrandApi'

const Brand = () => {
    const [brand, setBrands] = useState(brands)
  return (
    <>
        <div className='brand_container'>
        {brand.map((elem) =>{
            const {id, img, brand} =elem
            return(
                <div className='brand_card text-center pb-3'>
        <div className='brand_bg'>
                <img className="brand_img_cloth" src={img} alt='..'/>
            </div>
            <div className='pt-4 pb-4 '>
                <img src={brand} className='brand_img' alt='..'/>
            </div>
        </div>
            )
        })}
       
            
        </div>
    </>
  )
}

export default Brand