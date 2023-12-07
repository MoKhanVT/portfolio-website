import React from "react";
import "./services.scss";
import { servicesMenu } from "../../../constants/LandingPage";

const Services = () => {
  return (
    <>
      <section id="services-wrapper">
        {/* <h6>Services</h6> */}
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <div className="services">
          {servicesMenu?.map((item) => {
            return (
              <>
                <div className="services-card">
                  <span>{item?.src}</span>
                  <h3>{item?.title}</h3>
                  <p>{item?.define}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
