import React from "react";

export default function Middle() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h1 className="top-h1">
            Join our wait list to get early access to the app
          </h1>
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
