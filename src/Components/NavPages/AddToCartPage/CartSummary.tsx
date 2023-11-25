import React from 'react';
interface CartSummaryProps{
    totalPrice:number
}
const CartSummary:React.FC<CartSummaryProps> = ({ totalPrice }) => {
  console.log('Totalprice',totalPrice)
  return (
    <div className="col-12 col-sm-5  p-3">
   
      <h6 className="fw-bold fs-6 mb-3">PRICE DETAILS</h6>
      <div className="d-flex justify-content-between fs-6-override fw-semibold text-secondary mt-2">
        <span>TOTAL MRP</span>
        <span>&#8377; {totalPrice}</span>
      </div>
      <div className="d-flex justify-content-between fs-6-override fw-semibold text-secondary mt-2">
        <span>Discount on MRP</span>
        <span className="text-success text-decoration-line-through">
          &#8377; 1700
        </span>
      </div>
      <div className="d-flex justify-content-between fs-6-override fw-semibold text-secondary mt-2">
        <span>Coupon Discount</span>
        <span className="text-danger">Apply Coupon</span>
      </div>
      <div className="d-flex justify-content-between fs-6-override fw-semibold text-secondary mt-2 pb-3 border-bottom">
        <span>
          Convenience Fee <strong className="text-danger">Know More</strong>
        </span>
        <span className="text-success">
          <span className="text-decoration-line-through text-secondary">
            &#8377; 69
          </span> FREE
      </span>
      </div>
      <div className="d-flex justify-content-between fs-6 fw-bolder mt-3">
        <span>TOTAL AMOUNT</span>
        <span className="text-danger">&#8377; {totalPrice}</span>
      </div>
      <div>
        <button className="border w-100 pt-2 pb-2 btn-myntra fw-semibold rounded-1 mt-3" style={{background:'#ff3f6c',color:'#ffff'}}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
