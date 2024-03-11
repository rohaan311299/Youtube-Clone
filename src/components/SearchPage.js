import React from 'react';
import './searchpage.css';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='search-page'>
        <div className='search-page-filter'>
            <TuneIcon />
            <h2>Filters</h2>
        </div>
        <hr/>

        <ChannelRow image = 'https://miro.medium.com/v2/resize:fit:2400/1*TQw2_wmdWlXYXVSsz45Kdw.jpeg' channel = 'Rohan kacheria' verified subs = '700K' noOfVideos={500} description="This is me showcasing my youtubeclone skills" />
        <hr />

        <VideoRow image={'https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'this is a title'} channel={'Rohan Kacheria'} views={'2.3M views'} timestamp={'3 days ago'} subs={'700k'} description= {'this is my video'} channelImage={'https://miro.medium.com/v2/resize:fill:176:176/1*TQw2_wmdWlXYXVSsz45Kdw.jpeg'}/>
        <VideoRow image={'https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'this is a title'} channel={'Rohan Kacheria'} views={'2.3M views'} timestamp={'3 days ago'} subs={'700k'} description= {'this is my video'} channelImage={'https://miro.medium.com/v2/resize:fill:176:176/1*TQw2_wmdWlXYXVSsz45Kdw.jpeg'}/>
        <VideoRow image={'https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'this is a title'} channel={'Rohan Kacheria'} views={'2.3M views'} timestamp={'3 days ago'} subs={'700k'} description= {'this is my video'} channelImage={'https://miro.medium.com/v2/resize:fill:176:176/1*TQw2_wmdWlXYXVSsz45Kdw.jpeg'}/>
        <VideoRow image={'https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'this is a title'} channel={'Rohan Kacheria'} views={'2.3M views'} timestamp={'3 days ago'} subs={'700k'} description= {'this is my video'} channelImage={'https://miro.medium.com/v2/resize:fill:176:176/1*TQw2_wmdWlXYXVSsz45Kdw.jpeg'}/>

    </div>
  )
}

export default SearchPage
