import React from "react";
import { Link } from "react-router-dom";
function VideoCard(props) {
  let img = `/images/${props.thumbnails}`
  return (
    <Link to="/display" style={{ color: 'black', textDecoration: 'none' }}>
      <div className="card" style={{ border: 'none', cursor: 'pointer' }}>
        <img src={img} className="card-img-top" style={{ width: 'auto' }} alt="" />
        <div className="card-body" style={{ backgroundColor: '#f9f9f9' }}>
              <h5 style={{ fontSize: 16 }} className="card-text">{props.title}</h5>
              <span style={{ fontSize: 14 }} className="card-text">{props.channelTitle}</span>
              <br />
              <span style={{ fontSize: 14 }} className="card-text">{props.view}</span>
              <span style={{ fontSize: 14 }} className="card-text"> &bull; {props.date}</span>
            </div>
       
      </div>
    </Link>
  )

}
export default VideoCard

