import React, { useState } from "react";
import "./top.scss";
import { tops } from "./TopApi";

const TopPick = () => {
  const [top, setTop] = useState(tops);
  return (
    <>
      <div className="top_container">
        {top.map((elem) => {
          const { id, image,  } = elem;
          return (
            <div className="top_image_card">
              <div className="top_image ">
                <img src={image} alt=".." className="imgs" />
              </div>
              {/* <div className="top_text text-center pt-2">
                <p style={{fontWeight:"bold"}}>{name}</p>
                <h5 style={{ marginTop: "-20px" }}>Under ₹{price}</h5>
              </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopPick;
