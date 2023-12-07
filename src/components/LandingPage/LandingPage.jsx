import React from "react";
import hero from "../../assets/background/herobanner.png";
import "./landingPage.scss";
import ServicesAvaliabilty from "./ServicesAvaliabilty/ServicesAvaliabilty";
import DealContact from "./DealContact/DealContact";
import Connection from "./Connection/Connection";
import Packages from "./Packages/Packages";
import OtherSection from "./OtherSection/OtherSection";
import Services from "./Services/Services";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <meta
          property="og:title"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <meta property="og:site_name" content="Exfinity Plans" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a voluptates quas?"
        />
        <meta property="og:type" content="Article" />
        <meta
          property="og:image"
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fxfinity-authorized-retailer&psig=AOvVaw3jA1kHeadP821cm4BCyK2L&ust=1693508859258000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjkmKSKhYEDFQAAAAAdAAAAABAD"
        />
        <title>
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </title>
        <meta name="robots" content="index" />
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a voluptates quas?"
        />
      </Helmet>
      <section id="hero-wrapper">
        <div className="row">
          <div className="col-md-6 content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="52"
              viewBox="0 0 104 52"
              fill="none"
              className="top"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0C0 28.7188 23.2812 52 52 52C80.7188 52 104 28.7188 104 0H94C94 23.196 75.196 42 52 42C28.804 42 10 23.196 10 0H0Z"
                fill="#D6111E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="114"
              viewBox="0 0 53 114"
              fill="none"
              className="left"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 113.724C29.6139 111.671 53 86.9973 53 56.8618C53 26.7263 29.6139 2.05292 0 -1.13949e-07V10.0296C24.0851 12.0595 43 32.2518 43 56.8618C43 81.4719 24.0851 101.664 0 103.694V113.724Z"
                fill="#D6111E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              className="circle1"
            >
              <circle
                cx="15.5"
                cy="15.5"
                r="15.5"
                transform="matrix(-1 0 0 1 31 0)"
                fill="#D6111E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="181"
              height="263"
              viewBox="0 0 181 263"
              fill="none"
              className="mob-bg-line"
            >
              <path
                d="M7.53283 261.083L0 259.798C10.7355 259.094 21.5895 259.286 32.1034 257.524C69.1063 251.34 97.9535 231.447 119.971 201.503C147.022 164.729 157.505 123.007 154.444 77.603C152.743 51.471 145.481 26.0128 133.149 2.95513C132.705 2.12015 132.384 1.20822 131.888 0H186.314C188.806 11.0317 191.615 22.2905 193.824 33.6724C194.856 38.967 195.483 44.3424 196.117 49.7178C196.704 54.7381 196.998 59.7887 197 64.8436V70.6769C197 75.8484 196.878 81.0391 196.14 86.1606C196.102 86.4299 196.067 86.7031 196.048 86.9763C193.537 120.068 184.258 151.027 167.094 179.378C143.319 218.661 110.531 246.48 65.659 258.259C58.7339 260.079 51.6062 261.037 44.509 262.156C41.2671 262.671 37.9917 262.942 34.7099 262.968L31.3122 262.995C23.3454 263.062 15.3882 262.422 7.53283 261.083Z"
                fill="#D6111E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              className="circle2"
            >
              <circle cx="9.5" cy="9.5" r="9.5" fill="#FF0000" />
            </svg>

            <h2 className="web-head" style={{ color: "#D6111E" }}>
              Lorem, ipsum dolor.
            </h2>
            <br />
            <span className="mob-head">
              <h2 className="mob-head-heading">Lorem, ipsum dolor.</h2>
            </span>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a voluptates quas?
            </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore assumenda nobis accusantium.
            </p>
            <br />
            <button>
              {" "}
              <a
                href="tel:+11111111111"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Order Now{" "}
              </a>
            </button>
          </div>
          <div className="col-md-6 image">
            <img
              src={hero}
              alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a voluptates quas?"
            />
          </div>
        </div>
      </section>
      <ServicesAvaliabilty />
      <Services />
      <DealContact />
      <Connection />
      <Packages />
      <OtherSection />
    </>
  );
};

export default LandingPage;
