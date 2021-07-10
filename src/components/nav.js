import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="container-fluid">
      <div className="row pt-3">
        <div className="col-lg-4 col-md-3 col-sm-4 col-5">
          <div className="head-container1">
            <span className="p-3"><FontAwesomeIcon icon={['fa', 'bars']} size="1x" /></span>
            <Link to="/">
            <img style={{ height: 30}} src="/images/logo3.jpg" alt=""/>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 head-container2-col">
          <div className="head-container2">
            <input type="text" placeholder="ค้นหา" />
            <button type="submit" className="text-secondary"><FontAwesomeIcon icon={['fa', 'search']} size="sm" /></button>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-7 col-7">
          <div className="head-container3">
            <ul>
            <li className=" p-2 m-1 head-container2-sub">
                <span className="p-2"><FontAwesomeIcon icon={['fa', 'search']} size="1x" /></span>
              </li>
              <li className=" p-2 m-1 ">
                <span className="p-2"><FontAwesomeIcon icon={['fa', 'th']} size="1x" /></span>
              </li>
              <li className=" p-2 m-1 ">
                <span className="p-2"><FontAwesomeIcon icon={['fa', 'ellipsis-v']} size="1x" /></span>
              </li>
              <li className="border border-primary p-2 m-1 head3-sub">
                <span className="p-2"><FontAwesomeIcon icon={['fa', 'user-circle']} size="1x" /></span>
                <span >SIGN IN</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
