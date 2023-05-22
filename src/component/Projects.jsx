import React from "react";

const Projects = () => {
  return (
    <>
    <h1 className="mt-5 text-center pt-5 pb-5" id="prj" style={{'fontFamily':'Source Serif Pro , serif'}}>PROJECTS</h1>
      <div className="container mt-5 pt-2">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-lg"  style={{ border: "none" }}>
              <div className="card-body">
              <div className="text-center">
                  <h3>CODE SOLUTION</h3>
              </div>
              <p className="mt-3 pt-4">
                  Code  solution is an web  application  that  provide lots of features
                  for web developer to  make  work  easy and fast. In this application
                  a developer can simply create their website component with few click 
                  and get html and css code of it. based on MERN.
                </p>
               <div className="text-center">
               <p>CLICK TO VIEW PROJECT</p>
                <a target='_blank' href="https://codesolution.netlify.app/">https://codesolution.netlify.app/</a>
               </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 pr2">
            <div className="card shadow-lg" style={{ border: "none" }}>
            <div className="card-body">
              <div className="text-center">
                  <h3>MUSIC ZONE</h3>
              </div>
              <p className="mt-3 pt-4">
                  Music Zone is an music streaming web application  that  provide lots of features
                  for user. Features like create playlist, download songs, vew recent play
                  song, etc. It is based on MERN.
                </p>
                <div className="text-center">
               <p>CLICK TO VIEW PROJECT</p>
                <a href="#">Not available</a>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
