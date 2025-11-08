import React from 'react'

const Leftimage = ({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img src={imageURL}></img>
          </div>
          <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a style={{textDecoration:"none"}} href={tryDemo}>
                Try Demo <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a
                style={{ marginLeft: "50px", textDecoration: "none" }}
                href={learnMore}
              >
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="mt-3">
              <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg"></img>
              </a>
              <a
                style={{ marginLeft: "50px" }}
                href={appStore}
              >
                <img src="media/images/appstoreBadge.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leftimage