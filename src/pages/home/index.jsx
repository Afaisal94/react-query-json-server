import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}> React Query </h1>

      

      <div className="row mt-5" style={{backgroundColor: '#F4F6F6'}}>
        <div className="col-md-4">
          <center>
            <Link to={"/list"} className="btn btn-success m-3">
              <h3>CRUD Operation</h3>
            </Link>   
          </center>     
        </div>
        <div className="col-md-4">
          <center>
            <Link to={"/paginate"} className="btn btn-success m-3">
              <h3>Pagination</h3>
            </Link>   
          </center>     
        </div>
        <div className="col-md-4">
          <center>
            <Link to={"/infinitescroll"} className="btn btn-success m-3">
              <h3>Infinite Scroll</h3>
            </Link>
          </center>        
        </div>
      </div>

      
    </div>
  );
}

export default Home;
