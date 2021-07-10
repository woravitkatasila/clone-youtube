import React from "react";

function Display() {

    let link = `https://www.youtube.com/embed/m0LOKQwRPxM`

    return (
        <div>
            <div className="videoWrapper">
                <iframe width="560" height="315" src={link} allow="autoplay; encrypted-media" ></iframe>
            </div>
       </div>  
    )


}
export default Display
