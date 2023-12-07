import React from "react";
import "./dealContact.scss";
import deal from "../../../assets/images/deal.png";

const DealContact = () => {
  return (
    <>
      <section id="deal-contact-wrapper">
        <div className="deals-wrapper">
          <img src={deal} alt="Xfinity Internet + TV Deals" />
          <div className="content">
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Dolorem consequatur facilis aperiam fugit nesciunt vitae 
              repellat hic, molestiae quis laudantium culpa expedita voluptate 
              laboriosam deserunt minima amet perspiciatis eius maiores?
            </p>
          </div>
        </div>
        <div className="contact-us">
          <a href="tel:+11111111111">
            Call Now &nbsp;&nbsp; &nbsp; (1111-1111)
          </a>
        </div>
        <div className="contact-us-mobile">
          <a href="tel:+11111111111">
            Call Now <p>(1111-1111)</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default DealContact;
