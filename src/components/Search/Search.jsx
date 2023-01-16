import React, { useState, useRef } from "react";
import Card from "../Card/Card";
import User from "../../assets/icons8-user-100.png";
import "./Search.scss";

const Search = () => {
  const [user, setUser] = useState([]);
  const [card, setCard] = useState(false);
  const inputValue = ({} = useRef());

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "337ec89bc4msh66b41e032a1f0f6p166c97jsn86573a36ee9c",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  const callApi = async (e) => {
    setCard(true);
    e.preventDefault();

    let defaultText = inputValue.current.value;

    const url = await fetch(
      `https://spotify23.p.rapidapi.com/user_profile/?id=${defaultText.toLowerCase()}&playlistLimit=10&artistLimit=10`,
      options
    );
    const user = await url.json();
    setUser(user);
  };

  return (
    <>
      <form className="search-container">
        <p className="search-container__title">search user</p>

        <div className="search-elements">
          <input
            type="text"
            placeholder="Enter a spotify user"
            className="search-elements__input"
            ref={inputValue}
          />
          <input
            type="submit"
            value="Search"
            className="search-elements__btn"
            onClick={callApi}
          />
        </div>
      </form>

      <section className="card-container">
        {card === false ? (
          ""
        ) : (
          <Card
            name={user.name}
            npm
            install
            react-hook-form
            photo={user.image_url ? user.image_url : User}
            followers={user.followers_count}
            following={user.following_count}
            namePlayList={user.total_public_playlists_count}
          />
        )}
      </section>
    </>
  );
};

export default Search;
