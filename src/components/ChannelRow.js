import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return (
    <div className='channel-row'>
      <Avatar className='channel-row-logo' alt={channel} src={image} />
      <div className='channel-row-text'>
        <h4>{channel} {verified && <CheckCircleIcon />} </h4>
        <p>{subs} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
