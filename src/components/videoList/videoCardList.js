import React from "react";
import VideoCard from "./videoCard";

function VideoCardList() {
    let data= [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
        <div className="container-fluid">
            <div className="row pt-5">
            {data &&
          data.map((i) => (
              <div   key={i} className="col-lg-3 col-md-6 col-sm-6 col-12  p-1" >
                <VideoCard title="Marvel Studios' Eternals ฮีโร่พลังเทพเจ้า | ตัวอย่างแรก (Official ซับไทย)" 
                channelTitle="Marvel Thailand"
                thumbnails="mqdefault.jpg" id="m0LOKQwRPxM"
                view="การดู 666,010 ครั้ง" date="2 ปีที่แล้ว"
                />
              </div>
          ))}
                
            </div>
        </div>

    )
}
export default VideoCardList

