import React from "react";

const Contact = () => {
  return (
    <>
    <div id="abt">
      {" "}
      <h1
        className="mt-5 text-center pt-5 text-shadow-lg"
        style={{ fontFamily: "Source Serif Pro , serif" }}
      >
        CONTACT ME
      </h1>
      <div className="mb-5 pb-5 con shadow-lg card container mt-5 p-5" id="co">
      <div className="card-body contact">
      <div className="text-center">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <p>zaidcoder01@gmail.com</p>
        </div>
        <div className="text-center">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
          <p><a target='_blank' href="https://www.linkedin.com/in/zaidcoder01/" style={{color:'black'}}>https://www.linkedin.com/in/zaidcoder01/</a></p>
        </div>
        <div className="text-center">
          <i class="fa fa-github" aria-hidden="true"></i>
          <p><a target='_blank' href="https://github.com/zaid-coder-01" style={{color:'black'}}>https://github.com/zaid-coder-01</a></p>
        </div>
        <div className="text-center">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <p>+91 8530802282</p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
