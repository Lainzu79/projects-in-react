import React from "react";
import { FaHeadphones } from "react-icons/fa";
import "./Card.scss";

const Card = ({ name, photo, followers, following, namePlayList }) => {
  return (
    <div className="card-box">
      <div className="card-user">
        <p className="card-user__name">{name}</p>
        <img src={photo} alt="photo" className="card-user__photo" />

        <div className="card-info">
          <p className="card-info__followers">
            followers <span>{followers}</span>
          </p>
          <p className="card-info__following">
            following <span>{following}</span>
          </p>
        </div>
      </div>

      {/*---PlayList User---*/}
      <div className="card-playlist">
        <span className="card-playlist__icon">
          <FaHeadphones />
        </span>
        <span className="card-playlist__name">{namePlayList}</span>
      </div>
    </div>
  );
};

export default Card;
