
import React from "react";
import Layout from "../components/layout"
import  Display from "../components/displayVideo/display"
import  Detail from "../components/displayVideo/detail"
import  Comment from "../components/displayVideo/comment"
import  VideoItem from "../components/displayVideo/videoItem"

function DisplayVideo(){
    //console.log(match.params.watch)
    return (
        <>
            <Layout>
            <div className="container-fluid">
                <div className="row pt-3">
                    <div className="col-lg-8 col-12 diplay-item">
                    <Display/>
                    <Detail/>
                    <Comment/>
                    </div>
                    <div className="col-4 video-item">
                    <VideoItem/>
                    </div>
                </div> 
            </div>
            </Layout>
        </>
    )
}
export default DisplayVideos