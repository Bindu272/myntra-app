import React, { useState } from "react";
import "./deal.scss";
import { deals } from "./DealApi";

const DealOf = () => {
  const [deal, setDeal] = useState(deals);
  return (
    <>
      
        <div className="deal_card">
          {deal.map((elem) => {
            const { id, image,  } = elem;
            return (
              <>
                <div className="card border-0" >
                  <img
                    src={image}
                    className="card-img-top img_deal"
                    alt="..."
                  />
                  {/* <div
                    className="card-body "
                    style={{ backgroundImage: "pink" }}
                  ></div> */}
                  {/* <div className="transparent_card">
                    <div className="transparent_position">
                      <p className="para1" style={{ marginBottom: "1rem" }}>
                       {para1}
                      </p>
                      <p className="para2">{para2}</p>
                      <h3 className="heading1">{heading1}</h3>
               
                      
                        <i className="fa-solid fa-chevron-right  deal_arrow"></i>
                      
                    </div>
                  </div> */}
                </div>
              </>
            );
          })}
        </div>
     
    </>
  );
};

export default DealOf;
