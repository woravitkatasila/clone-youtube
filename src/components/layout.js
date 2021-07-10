
import React from "react";
import Nav from "./nav";
import NavItem from "./navItem";


const Layout = (props) => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 nav-item">
            <NavItem />
          </div>
          <div className="col-10 child-item" style={{backgroundColor:'#f9f9f9'}}>
            {props.children}
          </div>
        </div>

      </div>

    </>
  );
};

export default Layout;