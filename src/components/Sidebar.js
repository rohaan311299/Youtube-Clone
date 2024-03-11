import React from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SidebarRowSubscription from './SidebarRowSubscription';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon = {HomeIcon} title="Home"/>
        <SidebarRow Icon={SlideshowIcon} title='Shorts' />
        <SidebarRow Icon = {SubscriptionsIcon} title='Subscription' />
        <hr />
        <SidebarRow Icon = {ArrowRightIcon} title={'You'} />
        <SidebarRow Icon={AccountBoxIcon} title={'Your Channel'} />
        <SidebarRow Icon={HistoryIcon} title={'History'} />
        <SidebarRow Icon={SlideshowIcon} title={'Your Videos'} />
        <SidebarRow Icon={AccessTimeIcon} title={'Watch Later'} />
        <SidebarRow Icon={KeyboardArrowDownIcon} title={'Show More'} />
        <hr />
        <SidebarRow Icon={AccountBoxIcon} title={'Your Channel'} />
        <SidebarRow Icon={HistoryIcon} title={'History'} />
        <SidebarRow Icon={SlideshowIcon} title={'Your Videos'} />
        <SidebarRow Icon={AccessTimeIcon} title={'Watch Later'} />
        <SidebarRow Icon={KeyboardArrowDownIcon} title={'Show More'} />
        <hr />
        <h4>Subscriptions</h4>
        <SidebarRowSubscription image={'https://yt3.googleusercontent.com/ytc/AIdro_nbK_D94OcXEb4TJMW2JzTTtdB6DjfZPQpaSlcLfQ=s900-c-k-c0x00ffffff-no-rj'} title={'Clever Programmer'} />
        <SidebarRowSubscription image={'https://pbs.twimg.com/profile_images/1496857274165436420/yjDjLCDh_400x400.jpg'} title={'Ali Abidal'} />
        <SidebarRowSubscription image={'https://yt3.googleusercontent.com/M07Tt5xfTE2J__j-Rz6scTUeUNWsotuG2expy0viMTE4QDApwuyjgLLoBqRjMThms_dvxJRH=s900-c-k-c0x00ffffff-no-rj'} title={'John Liang'} />
        <SidebarRowSubscription image={'https://www.the-sun.com/wp-content/uploads/sites/6/2023/09/frank-medrano-fitness-trainer-843090775.jpg'} title={'Frank Medrano'} />
        <SidebarRowSubscription image={'https://play-lh.googleusercontent.com/MoaYYQjGtmGLhG9HbjCDKyj44kwHj1HfbCI2Am70elRm35vJ-u4y4X5uEJjP97MAAsU'} title={'FreeCodeCamp'} />
        <SidebarRow Icon={KeyboardArrowDownIcon} title={'Show 101 More'} />
        <hr />
        <h4>Explore</h4>
        <SidebarRow Icon={WhatshotIcon} title={'Trending'} />
        <SidebarRow Icon={ShoppingBagIcon} title={'Shopping'} />
        <SidebarRow Icon={MusicNoteIcon} title={'Music'} />
        <SidebarRow Icon={MovieCreationIcon} title={'Movies & TV'} />
        <SidebarRow Icon={SensorsIcon} title={'Live'} />
        <SidebarRow Icon={SportsEsportsIcon} title={'Gaming'} />
        <SidebarRow Icon={NewspaperIcon} title={'News'} />
        <SidebarRow Icon={EmojiEventsIcon} title={'Sport'} />
        <SidebarRow Icon={LightbulbIcon} title={'Learning'} />
        <SidebarRow Icon={CheckroomIcon} title={'Fashion & Beauty'} />
        <SidebarRow Icon={PodcastsIcon} title={'Podcasts'} />
        <hr />
        <h4>More from YouTube</h4>
        <SidebarRow Icon={SettingsIcon} title={'Settings'} />
        <SidebarRow Icon={EmojiFlagsIcon} title={'Report History'} />
        <SidebarRow Icon={HelpIcon} title={'Help'} />
        <SidebarRow Icon={FeedbackIcon} title={'Send Feedback'} />
        <hr />
        <div className='sidebar-footer'>
          <p>About Press Copyright</p>
          <p>Contact us Creator Advertise Developers</p>
          <p>Terms Privacy Policy & Safety</p>
          <p>How YouTube works</p>
          <p>Test new features</p>
          <p>NFL Sunday Ticket</p>
          <br />
          <p>© 2024 Google LLC</p>
        </div>
    </div>
  )
}

export default Sidebar
