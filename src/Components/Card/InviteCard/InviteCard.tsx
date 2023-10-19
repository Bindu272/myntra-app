import React from "react";
import './InviteCard.scss';

const InviteHome = () => {
  return (
    <>
    <div className="padding">
      <div className="invite_content">
        <img
          src="./Images/coin.png"
          alt="invite"
          className="item_gap coin_img"
        />

        <p className="item_gap  ">
          Invite friends to Myntra’s BFF & get up to ₹150
          <p>MynCash for every person who visits</p>
        </p>

        <button className=" invite_button_home item_gap ">
          INVITE NOW
          <span>
            <i
              className="fa-solid fa-chevron-right"
              style={{ paddingLeft: "1rem" }}
            ></i>
          </span>
        </button>
      </div>
      </div>
    </>
  );
};

export default InviteHome;
