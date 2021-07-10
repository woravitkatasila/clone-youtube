import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavItem() {
  return (
    <div className="header-vertical">
            <ul>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'home']} size="1x" /></span><span style={{marginLeft:25}}>Home</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'compass']} size="1x" /></span><span style={{marginLeft:25}}>Explore</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'window-restore']} size="1x" /></span><span style={{marginLeft:25}}>Subscriptions</span></li>
            <hr />
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'clone']} size="1x" /></span><span style={{marginLeft:25}}>Library</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'history']} size="1x" /></span><span style={{marginLeft:25}}>History</span></li>
            <hr />
            <b style={{marginLeft:15}}>BEST OF YOUTUBE</b>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'music']} size="1x" /></span><span style={{marginLeft:25}}>Music</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'trophy']} size="1x" /></span><span style={{marginLeft:25}}>Sports</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'headset']} size="1x" /></span><span style={{marginLeft:25}}>Gaming</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'newspaper']} size="1x" /></span><span style={{marginLeft:25}}>News</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'satellite-dish']} size="1x" /></span><span style={{marginLeft:25}}>Live</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'video']} size="1x" /></span><span style={{marginLeft:25}}>360 Video</span></li>
            <hr />
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'plus-circle']} size="1x" /></span><span style={{marginLeft:25}}>Browse channels</span></li>
            <hr />
            <b style={{marginLeft:15}}>MORE FROM YOUTUBE</b>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'play-circle']} size="1x" /></span><span style={{marginLeft:25}}>Youtube Premium</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'satellite-dish']} size="1x" /></span><span style={{marginLeft:25}}>Live</span></li>
            <hr />
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'cog']} size="1x" /></span><span style={{marginLeft:25}}>Setting</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'flag']} size="1x" /></span><span style={{marginLeft:25}}>Report history</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'question-circle']} size="1x" /></span><span style={{marginLeft:25}}>Help</span></li>
            <li><span style={{marginLeft:5}}><FontAwesomeIcon icon={['fa', 'info']} size="1x" /></span><span style={{marginLeft:25}}>Send feedback</span></li>
          </ul>
          </div>
     
  )
}

export default NavItem
