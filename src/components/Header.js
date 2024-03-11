import React, {useState} from 'react';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Header() {
  
  // hooks
  const [inputSearch, setInputSearch] = useState(''); // sets default to empty

  return (
    <div className='header'>

        <div className='header-left'>
            <MenuIcon />
            <Link to={'/'}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg" alt="" className='header-logo'/>
            </Link>
        </div>

        <div className='header-middle'>
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" className='search-box' placeholder='Search' />

            <Link to={`/search/${inputSearch}`}>
              <SearchIcon className='search-button' />
            </Link>
            <MicIcon />
        </div>

        <div className='header-right'>
            <VideoCallIcon className='header-icon' />
            <NotificationsIcon className='header-icon' />
            <Avatar className='header-icon' alt="Remy Sharp" src="./rohan.jpeg" />
        </div>
    </div>
  )
}

export default Header
