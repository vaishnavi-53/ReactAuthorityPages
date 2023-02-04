import React from 'react';
import {Link }from 'react-router-dom';

function Nav(){
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark  p-4"   >
    <h3><b>Road Transport Department</b></h3>
    <div className="container-fluid" >
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  " id="navSupportedContent"  >
        <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0 navbar-fixed-top  " style={{fontSize: "20px"}}  >
          <li className="nav-item" style={{paddingRight:"10px"}}>
          
          {/* marginLeft:'auto',marginRight:'auto' */}
            <Link to='/' ><i className="fa-solid fa-house-user"></i><b >HOME</b></Link>
          </li>
          
          <li className="nav-item" style={{paddingRight:"10px"}} >
            
            <Link to='/R_form'><b>Vehicle Registration</b></Link>
          </li>
          <li className="nav-item" style={{paddingRight:"10px"}}>
              <Link to='/L_form'><b>Apply License</b></Link>
            
          </li>
          <li className="nav-item" style={{paddingRight:"10px"}}>
              <Link to='/P_form'><b>Apply Permit</b></Link>
            
          </li>
          <li className="nav-item" style={{paddingRight:"10px"}}>
              <Link to='/My_r'><b>MY Registrations</b></Link>
            
          </li>
          <li className="nav-item" style={{paddingRight:"10px"}}>
          <Link to='/My_l'><b>My License</b></Link>
            
          </li>
          <li className="nav-item" style={{paddingRight:"10px"}}>
          <Link to='/My_p'><b>MY Permits</b></Link>
            
          </li>
          <li className="nav-item " id="logout"   >
          <Link to='/Logout'><i className="fa-solid fa-right-from-bracket"></i><b>LOGOUT</b></Link>
            
          </li>
        </ul>
        </div>
    </div>
  </nav>
  </>
    );
}
export default Nav