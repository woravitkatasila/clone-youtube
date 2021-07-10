import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment() {

    return (
        <div>
            <p className="mt-3" style={{ fontSize: 17 }}>ความคิดเห็น 1,108 รายการ 
            <span style={{ marginLeft: 20 }}><FontAwesomeIcon icon={['fa', 'sort']} size="lg" /> จัดเรียงตาม</span></p>
            <div className="row">
            <div className="col-md-1 col-sm-2 col-3">
                <img src="/images/marvel.jpg"  style={{ width: 48 ,borderRadius:40}} alt="" />
                </div>    
                <div className="col-md-11 col-sm-10 col-9">
                    <input type="text"  placeholder="เพิ่มความคิดเห็นสาธารณะ..."
                    style={{borderTop:'none',borderLeft:'none',borderRight:'none',width:'100%',outline:'none',borderBottom:'solid 0.5px grey',backgroundColor:'#f9f9f9'}}/>
                </div>
            </div>
            <div className="mt-3">
            <div className="row mt-4">
            <div className="col-md-1 col-sm-2 col-3">
                <img src="/images/prvit.jpg"  style={{ width: 48 ,borderRadius:40}} alt="" />
                </div>    
                <div className="col-md-11 col-sm-10 col-9">
                <span>Pom Pom</span><span style={{fontSize:12,marginLeft:10,color:'grey'}}>6 ปีที่ผ่านมา</span>
                <br />
                <span>ไม่รู้ ไม่รู้ ๆๆๆ</span>
                <br />
                <span style={{fontSize:13,color:'grey'}}><FontAwesomeIcon icon={['fa', 'thumbs-down']} size="sm" /> 1.5 พัน</span>
                <span style={{fontSize:13,color:'grey',marginLeft:10}}><FontAwesomeIcon icon={['fa', 'thumbs-up']} size="sm" /></span>
                <span style={{fontSize:13,color:'grey',marginLeft:20}}>ตอบกลับ</span>
                </div>
            </div> 
            <div className="row mt-3">
            <div className="col-md-1 col-sm-2 col-3">
                <img src="/images/prvit.jpg"  style={{ width: 48 ,borderRadius:40}} alt="" />
                </div>    
                <div className="col-md-11 col-sm-10 col-9">
                <span>Pom Pom</span><span style={{fontSize:12,marginLeft:10,color:'grey'}}>6 ปีที่ผ่านมา</span>
                <br />
                <span>ไม่รู้ ไม่รู้ ๆๆๆ</span>
                <br />
                <span style={{fontSize:13,color:'grey'}}><FontAwesomeIcon icon={['fa', 'thumbs-down']} size="sm" /> 1.5 พัน</span>
                <span style={{fontSize:13,color:'grey',marginLeft:10}}><FontAwesomeIcon icon={['fa', 'thumbs-up']} size="sm" /></span>
                <span style={{fontSize:13,color:'grey',marginLeft:20}}>ตอบกลับ</span>
                </div>
            </div> 
            <div className="row mt-3">
            <div className="col-md-1 col-sm-2 col-3">
                <img src="/images/prvit.jpg"  style={{ width: 48 ,borderRadius:40}} alt="" />
                </div>    
             <div className="col-md-11 col-sm-10 col-9">
                <span>Pom Pom</span><span style={{fontSize:12,marginLeft:10,color:'grey'}}>6 ปีที่ผ่านมา</span>
                <br />
                <span>ไม่รู้ ไม่รู้ ๆๆๆ</span>
                <br />
                <span style={{fontSize:13,color:'grey'}}><FontAwesomeIcon icon={['fa', 'thumbs-down']} size="sm" /> 1.5 พัน</span>
                <span style={{fontSize:13,color:'grey',marginLeft:10}}><FontAwesomeIcon icon={['fa', 'thumbs-up']} size="sm" /></span>
                <span style={{fontSize:13,color:'grey',marginLeft:20}}>ตอบกลับ</span>
                </div>
            </div> 
            <br/> <br/>
            
            
            
            </div>     
        </div>
    )


}
export default Comment
