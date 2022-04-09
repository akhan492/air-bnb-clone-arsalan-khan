import React from "react";
import {Search} from "react-feather";
import "./Searchinput.css";
function SearchInput(){
  return (
    <>
      <div className="search__section">
      <div className="overlay">
        <div className="field">
          <label htmlFor="location">Location</label>
          <input id="location" placeholder="Where are you going?" />
        </div>

        <div className="field">
          <label>Check-in</label>
          <input placeholder="Add dates" />
        </div>

        <div className="field">
          <label>Check-out</label>
          <input placeholder="Add dates" />
        </div>

        <div className="field">
          <label>Guests</label>
          <span className="guestNumber">
            {/* <p> guests</p> */}
            <p className="empty">Add guests</p>
          </span>
        </div>
      
        <div className="search__icon">
        <button
        type="submit"
        
        aria-label="search places"
        >
        <Search />
        </button>
       
      </div>
      </div>
          </div>
    </>
  );
}

export default SearchInput;
