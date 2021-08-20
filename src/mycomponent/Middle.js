import React from "react";

export default function Middle() {
  return (
    <>
  
      <div className="row middle-section">
        <div className="col-lg-6 middlePara">
          <div className="top-h1">
            Join our wait list to get early access to the app <span className="middle-brand-name">SayF</span>
          </div>
          <p className="top-p">
            SayF is a personal finance app that helps you save, invest and
            optimize your spending for a better future
          </p>

          <button type="button " className=" download-button">
            Get Early Access
          </button>
        </div>
        <div className="col-lg-6 ">
          <img
            src={"./brandLogo-triangle.png"}
            className="sayF-video"
            alt="sayF-video"
          />
        </div>
      </div>
    </>
  );
}
