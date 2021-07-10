import React from "react";
import { Link } from "react-router-dom";
function VideoItem(){
    let data= [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
return (
        <div className="container"> 
           {data &&
          data.map((i) => (
            <Link to="/display" style={{ color: 'black', textDecoration: 'none' }}  key={i}>
            <div className="row">
                <div className="col-5 p-1">
                <img  style={{ width:'100%' }} src="/images/mqdefault.jpg" alt=""/>
                </div>
                <div className="col-7 p-1">
                <label  style={{ fontSize:15,width: '100%', wordWrap: 'break-word' }}>
                Marvel Studios' Eternals ฮีโร่พลังเทพเจ้า | ตัวอย่างแรก (Official ซับไทย)
                </label>
                <label  style={{ fontSize:13,width: '100%'}}>Marvel Thailand</label>
                <label  style={{ fontSize:13,width: '100%' }}>การดู 666,010 ครั้ง • 2 ปีที่แล้ว</label>
                </div>
            </div>
            </Link>
                  ))}
        </div>
)

}
export default VideoItem
