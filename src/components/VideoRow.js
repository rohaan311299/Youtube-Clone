import React from 'react';
import './VideoRow.css';

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
  return (
    <div className='video-row'>
      <img src={image} alt={title} />
      <div className='video-row-text'>
        <h3>{title}</h3>
        <p className='video-row-headline'>{channel} . <span className='video-row-subs'><span className='video-row-subs-number'>{subs}</span> subscribers</span> {views} views . {timestamp} </p>
        <p className='video-row-description'>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
