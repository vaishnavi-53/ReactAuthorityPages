import React from 'react';



function Rform(){
    return (
      <>
      <div className="container">
    <h2 style={{justifyContent: "center",display:" flex"}}> Registration Form </h2>
    <form action="">
      <div className="row">
        <div className="col-25">
          <label htmlFor="fname">Full Name</label>
        </div>
        <div className="col-75">
          <input type="text" id="fname" name="fullname"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="age">Age</label>
        </div>
        <div className="col-75">
          <input type="number" id="age" name="age"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="gen">Gender</label>
        </div>
        <div className="col-75">
          <select id="gen" name="gen">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>      
      <div className="row">
        <div className="col-25">
          <label htmlFor="perad">Permanant Address</label>
        </div>
        <div className="col-75">
          <input type="text" id="perad" name="perad"/>
        </div>
      </div>
       <div className="row">
        <div className="col-25">
          <label htmlFor="tempad">Temporary Address</label>
        </div>
        <div className="col-75">
          <input type="text" id="tempad" name="tempad"/>
        </div>
      </div>      
      <div className="row">
        <div className="col-25">
          <label htmlFor="dob">Date of Birth</label>
        </div>
        <div className="col-75">
          <input type="date" id="dob" name="dob"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="dname">Name of the dealer</label>
        </div>
        <div className="col-75">
          <input type="text" id="dname" name="dname"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="dad">Address of the dealer</label>
        </div>
        <div className="col-75">
          <input type="text" id="dad" name="dad"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="vehcls">className of Vehicle</label>
        </div>
        <div className="col-75">
          <input type="text" id="vehcls" name="vehcls"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="eng">Engine Number</label>
        </div>
        <div className="col-75">
          <input type="number" id="eng" name="eng"/>
        </div>
      </div>
      <br/>
      <div  className="row"  >
        <input style={{width: "100px ",marginRight: "5px"}} type="reset" value="Reset"/>
        <input style={{width: "100px"}}  type="submit" value="Submit"/>
      </div>
    </form>
    <br/>
  </div>
  <br/>
  <br/>
  
      </>
    );
}
export default Rform