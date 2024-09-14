import React from "react";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4">Welcome to Telemedicine Platform</h1>
          <p className="lead">Your Trusted Partner in Remote Healthcare</p>
          <p>
            Connect with healthcare providers from the comfort of your home.
          </p>
          <div className="mt-4">
            <Link to="/login" className="btn btn-primary mr-3">
              Login
            </Link>
            <Link to="/register" className="btn btn-success mr-3">
              Register
            </Link>
            <Link to="/aboutus" className="btn btn-info">
              About Us
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="download.jpg" // Replace with your image URL
            alt="Telemedicine Platform"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
