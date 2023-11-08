import React, { useState } from 'react'
import './AddToCart.scss'
import { useCart } from './CartContext'
import CartSummary from './CartSummary';

const AddToCart = () => {
  const { cart, dispatch } = useCart();
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: number }>({});

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, itemId: string) => {
    const newSelectedOptions = { ...selectedOptions, [itemId]: parseInt(event.target.value) };
    setSelectedOptions(newSelectedOptions);
  };
  const options:any =[];
  for (let i=1; i<=10; i++){
    options.push(<option key={i} value={i}>{i}</option>);
  }
const calculateTotalPrice =(item:any, selectedOption:any)=>  (item.price* selectedOption) 
  const totalPrice = cart.items.reduce((total:any, item:any)=>{
    const selectedOption = selectedOptions[item.id] || 1;
    return total + (item.price * selectedOption)
  },0)
  return (
    
    <>
    {cart.items.length===0?(
      <div className='emptyBagContainer'>
        <img src='./Images/empty-bag.webp' alt='emptyCart' className='empty-bag-img'/>
        <div className='emptyText'>Hey, it feels so light!</div>
        <div className='emptyDesc'>There is nothing in your bag. Let's add some items.</div>
        <button>ADD ITEMS FROM WISHLIST</button>
    </div>
    ):(
    <div>
       <section className="cartContainer">
        <div className="pt-5">
          <div className="row">
            {/* Left side of Cart */}

            <div className="col-12 col-sm-7">
              <div className="border pt-2 pb-2 px-3 d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold">Check delivery time & services</span>
                <button className="text-danger border bg-body fw-bold pt-2 pb-2 px-3 fs-6-override border-danger">
                  ENTER PIN CODE
                </button>
              </div>
              <div className="border p-2 mb-2">
                <span>
                <i className="fa-solid fa-truck"></i> Yay!
                  <strong>No convience fee</strong> on this order
                </span>
              </div>
              <div className="p-3 d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fs-6 fw-bold">ITEMS IN BAG</h5>
                </div>
                <div className="d-flex fw-bold text-secondary fs-6-override align-items-center">
                  <div className="border-end border-2 pe-2">
                    <span>REMOVE</span>
                  </div>
                  <div className="ps-2">
                    <span>MOVE TO WISHLIST</span>
                  </div>
                </div>
              </div>
              <>{cart.items.map((item:any)=>(<>
              <div className="border p-2 d-flex ">
               
                    <div className="w-25">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100"
                    />
                  </div>
                  <div className="justify-content-start w-75">
                    <div className="m-4">
                      <h6 className="d-block">{item.title}</h6>
                    <p className="d-block small">{item.description}</p>
                      {/*   <span className="d-block">Brand</span> */}
                      <select
                            onChange={(event) => handleSelectChange(event, item.id)}
                            value={selectedOptions[item.id] || 1}
                          >
                            {options}
                          </select>
                          <h1>{selectedOptions[item.id] || 1}</h1>
                          <h6 className="d-block">{calculateTotalPrice(item, selectedOptions[item.id] || 1)} <span className='small'>Rs/-</span></h6>
                     <p>{}</p>
                    </div>
                  </div>
                  <div className="justify-content-end">
                    <i className="bi bi-x-lg"></i>
                  </div>
              
              </div>
              </>
                ))}</>
            </div>

            {/* Right side of Cart */}

            <CartSummary totalPrice={totalPrice}/>
          </div>
        </div>
      </section>
    </div>
 
    )}
      
    </>
  )
}

export default AddToCart


