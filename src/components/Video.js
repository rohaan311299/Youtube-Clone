import React from 'react';
import { Avatar } from '@mui/material';
import './video.css'

function Video({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div className='video-card'>
        <img className='video-card-thumbnail' src ={image} alt='' />
        <div className='video-info'>
            <Avatar className='video-avatar' alt={channel} src={channelImage} />
            <div className='video-text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} . {timestamp}</p>
            </div>
        </div>
    </div>
  )
}

export default Video
