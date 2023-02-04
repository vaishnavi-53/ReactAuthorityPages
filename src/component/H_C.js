import React from 'react';
import Link from 'react-router-dom';
function H_C(){
    return (
      <>
      <div id="home" className="container-fluid" >
    <img src="Home.avif"/>
    <h1><b>Welcome User</b></h1>
    <p>Here you can get the details about you and your vehicles.We help you in the following aspects:</p>
    <div className='container'>
    <ul style={{textAlign:"left"}}>
      <li>Register vehicles and view RC and its status</li>
      <li>Apply for/view license</li>
      <li>Apply for/view permits</li>
    </ul>
    </div>
  </div>
      </>
    );
}
export default H_C