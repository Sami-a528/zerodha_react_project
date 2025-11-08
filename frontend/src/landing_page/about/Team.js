import React from 'react'

const Team = () => {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5">
          <h1 className="text-center">People</h1>
        </div>
        <div className="row p-2  fs-6" style={{ lineHeight: "1.8" }}>
          <div className="col-6 p-2 text-center">
            <img
              src="media/images/nithinkamath.jpg"
              style={{ borderRadius: "100%", width: "40%" }}
            ></img>
            <h4 className="mt-4">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6 p-4">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a style={{ textDecoration: "none" }} href="#">
                Homepage
              </a>{" "}
              /{" "}
              <a style={{ textDecoration: "none" }} href="#">
                TradingQnA
              </a>{" "}
              /
              <a style={{ textDecoration: "none" }} href="#">
                Twitter
              </a>
            </p>
          </div>
        </div>
        <div className="row p-5 mt-5 mb-5 text-center" style={{ lineHeight: "1.8" }}>
          <div className="col mt-5">
            <img
              src="media/images/Nikhil.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            ></img>
            <h4 className="mt-4 fs-6">Nikhil Kamath</h4>
            <h6>Co-founder & CFO</h6>
          </div>
          <div className="col mt-5">
            <img
              src="media/images/Kailash.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            ></img>
            <h4 className="mt-4 fs-6">Dr. Kailash Nadh</h4>
            <h6>CTO</h6>
          </div>
          <div className="col mt-5">
            <img
              src="media/images/Venu.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            ></img>
            <h4 className="mt-4 fs-6">Venu Madhav</h4>
            <h6>COO</h6>
          </div>
          <div className="col mt-5">
            <img
              src="media/images/Hanan.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            ></img>
            <h4 className="mt-4 fs-6">Hanan Delvi</h4>
            <h6>CCO</h6>
          </div>
          <div className="col mt-5">
            <img
              src="media/images/Seema.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            ></img>
            <h4 className="mt-4 fs-6">Seema Patil</h4>
            <h6>Director</h6>
          </div>
          <div className="col mt-5">
            <img
              src="media/images/Karthik.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            ></img>
            <h4 className="mt-4 fs-6">Karthik Rangappa</h4>
            <h6>Chief of Education</h6>
          </div>
          <div className="col mt-5">
            <img
              src="media/images/Austin.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            ></img>
            <h4 className="mt-4 fs-6">Austin Prakesh</h4>
            <h6>Director Strategy</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team