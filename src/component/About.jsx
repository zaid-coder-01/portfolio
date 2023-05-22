import React from "react";

const About = () => {
  return (
    <>
      <h1
        className="mt-5 text-center pt-2"
        style={{ fontFamily: "Source Serif Pro , serif" }}
      >
        ABOUT ME
      </h1>
      <div className="container about shadow-lg mt-5 p-4" id="abt">
        <div className="row">
          <div className="col-md-4 ">
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <img
                  className="form-control img-fluid"
                  src="zaid.jpg"
                  alt="pic"
                  style={{ border: "none" }}
                ></img>
              </div>
            </div>
          </div>
          <div className="col-md-7 det">
            <div className="card" style={{ border: "none" }}>
              <div className="card-body pt-3 about">
                <p>
                  My name is Zaid Shah. I am a software engineer. My skill is
                  related to programming. Organized and dependable candidate
                  successful at managing multiple priorities with a positive
                  attitude. Willingness to take on added responsibilities to
                  meet team goals.
                  <h5 className="mt-5">EDUCATION</h5>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row">BE Computer Engineer</th>
                        <td>Theem college of engineering</td>
                        <td>2019-23</td>
                      </tr>
                      <tr>
                        <th scope="row">HSC</th>
                        <td>Salahuddin jr college </td>
                        <td>2018-19</td>
                      </tr>
                      <tr>
                        <th scope="row">SSC</th>
                        <td>New era english high school </td>
                        <td>2016-17</td>
                      </tr>
                    </tbody>
                  </table>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
