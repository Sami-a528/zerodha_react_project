import React from 'react'

const CreateTicket = () => {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className="p-3" id="supportWrapper">
          <h3>Support Portal</h3>
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            My Tickets
          </a>
        </div>
        <div className="row p-5 m-3">
          <div className="col-6 p-5">
            <h1 className="fs-3">
              Search for an answer or browser help topics to create a ticket
            </h1>
            <input placeholder="Eg : How do I open my account, How do I activate F&O"></input>
            <br />
            <a href="#">Track account opening</a>&nbsp;&nbsp;
            <a href="#">Track segment activation</a>&nbsp;&nbsp;
            <a href="#">Intraday margins</a>&nbsp;&nbsp;
            <a href="#">Kite user manual</a>
          </div>
          <div className="col-6 p-5">
            <h1>Featured</h1>
            <ol>
              <li>
                <a href="#">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="#">Latest Intraday - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateTicket