import React from 'react'
import { Search, Globe, User } from 'react-feather';
import "./SearchBar.css";

function SearchBar() {
  return (<>
  <div className='header'>
            {/* <Link to='/'> */}
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            {/* </Link> */}
           
            <div className='header__center'>
                <input type="text" placeholder='Start your search' />
                <Search />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <Globe/>
                <User/>
                
            </div>
        </div>

  
  </>
  )
}

export default SearchBar