import React from "react";
import internet from "../../../assets/images/internet.png";
import cable from "../../../assets/images/cable.png";
import "./connection.scss";

const Connection = () => {
  return (
    <>
      <section id="connection-wrapper">
        <div className="row">
          <div className="col-md-6 image mob-show">
            <img src={internet} alt="internet" />
          </div>
          <div className="col-md-6">
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium repellendus, saepe ipsum animi expedita odio
              fugit maiores a ullam, totam corporis magnam perferendis
              quia possimus repellat odit earum recusandae libero!
            </p>
            <button onClick={() => (window.location.href = "tel:+11111111111")}>
              Order Now
            </button>
          </div>
          <div className="col-md-6 image mob-hid">
            <img src={internet} alt="Fastest Internet Connection" />
          </div>
          <div className="col-md-6 image">
            <img src={cable} alt="Lorem ipsum dolor sit amet." />
          </div>
          <div className="col-md-6">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium voluptates dicta delectus vel, doloremque reiciendis
              consectetur laboriosam cumque fugit, repellendus itaque quia,
              quisquam perspiciatis facere vitae sit saepe doloribus necessitatibus.
            </p>
            <button onClick={() => (window.location.href = "tel:+11111111111")}>
              Order Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connection;
