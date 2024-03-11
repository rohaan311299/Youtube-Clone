import React from 'react';
import './sidebarRowSubscription.css'

function SidebarRowSubscription({image, title}) {
  return (
    <div className='sidebar-row-subscription'>
        <img className={`sidebar-row-subscription-icon`} src={image} />
        <h2 className='sidebar-row-subscription-title'>{title}</h2>
    </div>
  )
}

export default SidebarRowSubscription
