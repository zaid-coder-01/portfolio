import React from 'react'

const Progress = ({value,color,skill}) => {
  return (
    <>
        <div className="col-md-4 text-center">
      {skill}
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{"width": value+'%',backgroundColor:color}}
                  >{value}</div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Progress