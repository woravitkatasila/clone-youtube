import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Detail() {

    return (
        <div>
            <h5 className="mt-5">Marvel Studios' Eternals ฮีโร่พลังเทพเจ้า | ตัวอย่างแรก (Official ซับไทย)</h5>
            <div className="row">
                <div className="col-xl-7 ">
                    <span style={{ fontSize: 14 }}>การดู 666,010 ครั้ง</span><span style={{ fontSize: 14 }}> &bull; 2 ปีที่แล้ว</span>
                </div>
                <div className="col-xl-5">
                    <span><FontAwesomeIcon icon={['fa', 'thumbs-up']} size="lg" /> 1.1 หมื่น</span>
                    <span style={{ marginLeft: 20 }}><FontAwesomeIcon icon={['fa', 'thumbs-down']} size="lg" /> 123</span>
                    <span style={{ marginLeft: 20 }}><FontAwesomeIcon icon={['fa', 'share']} size="lg" /> แชร์</span>
                    <span style={{ marginLeft: 20 }}><FontAwesomeIcon icon={['fa', 'plus-square']} size="lg" /> บันทึก</span>
                </div>
            </div>
            <hr />
            <div className="row">
            <div className="col-md-1 col-sm-2 col-3">
                <img src="/images/marvel.jpg"  style={{ width: 48 ,borderRadius:40}} alt="" />
                </div>
                <div className="col-md-11 col-sm-10 col-9">
                    <label ><b>Marvel Thailand </b></label>
                    <br/><label style={{ fontSize: 14 }}>ผู้ติดตาม 1.74 แสน คน</label>
                    <p className="mt-3" style={{ width: '90%', wordWrap: 'break-word' }}>เมื่อจักรวาลได้ถูกคุกคาม เหล่าเทพเจ้าจึงต้องเผยตัวตนเพื่อปกป้องมวลมนุษย์  พบกับตัวอย่างแรกสุดยิ่งใหญ่ของภาพยนตร์ฮีโร่ฟอร์มยักษ์เรื่องล่าสุดของจักรวาลมาร์เวล Marvel Studios' Eternals ฮีโร่พลังเทพเจ้า</p>
                    <p className="mt-3" style={{ width: '90%', wordWrap: 'break-word' }}>ภาพยนตร์เรื่องล่าสุดจาก Marvel Studios ที่จะพาคุณไปพบกับทีมของเหล่าซูเปอร์ฮีโร่สุดทรงพลังของจักรวาลมาร์เวล “Eternals” มหากาพย์อันยาวนานของเหล่าเทพอมตะที่รวมตัวกันเพื่อปกป้องมวลมนุษย์จากศัตรูร้าย </p>
                   
                </div>
            </div>
            <hr />
        </div>
    )


}
export default Detail
