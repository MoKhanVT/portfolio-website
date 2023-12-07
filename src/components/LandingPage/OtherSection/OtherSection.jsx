import React, { useState } from "react";
import "./otherSection.scss";
import bill from "../../../assets/images/billing.png";
import Faq from "react-faq-component";
import leftimage from "../../../assets/images/left.png";
import rightimage from "../../../assets/images/right.png";
import { toast } from "react-toastify";
import axios from "axios";
import { DotLoader } from "react-spinners";
import Popup from "../../Common/Popup";

const OtherSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [values, setValues] = useState({
    name: "",
    zip: "",
    phone: "",
    email: "",
  });

  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!values.name) {
      toast.error("Please enter your name to submit the form.");
    } else if (
      !values.phone ||
      !/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)
    ) {
      toast.error("Please enter your Phone to submit the form.");
    } else if (
      !values.email ||
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email)
    ) {
      toast.error("Please enter your email to submit the form.");
    } else if (!values.zip) {
      toast.error("Please enter the zip to submit the form.");
    } else if (values.zip.length !== 5) {
      toast.error("Wrtie 5 digit zip code.");
    } else {
      setLoader(true);

      const payload = {
        email: "dummy@dummy.com",
        fromEmail: values.email,
        subjectText: values.zip,
        bodyText: `Name: ${values.zip}\nNumber: ${values.phone}`,
        senderName: values.name,
      };
      axios
        .post("base_url", payload)
        .then((response) => {
          setLoader(false);
          toast.success("Thank you for your response! :)");
        })
        .catch((err) => {
          setLoader(false);
          console.log({ err });
          toast.error("Error.");
        });
    }
  };

  const data = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis sed vel porro fugiat repellendus natus commodi molestias magnam. Facilis corrupti deleniti dolorum iste possimus.",
      },
      {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis sed vel porro fugiat repellendus natus commodi molestias magnam. Facilis corrupti deleniti dolorum iste possimus.",
      },
      {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis sed vel porro fugiat repellendus natus commodi molestias magnam. Facilis corrupti deleniti dolorum iste possimus.",
      },
      {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis sed vel porro fugiat repellendus natus commodi molestias magnam. Facilis corrupti deleniti dolorum iste possimus.",
      },
      {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis sed vel porro fugiat repellendus natus commodi molestias magnam. Facilis corrupti deleniti dolorum iste possimus.",
      },
    ],
  };

  const styles = {
    titleTextColor: "#000034",
    rowTitleColor: "#D6111E",
    textText: "center",
    rowContentPaddingBottom: "20px",
  };

  return (
    <>
      <section id="billing-wrapper">
        <div className="row">
          <div className="col-md-6 image">
            <img src={bill} alt="Lorem ipsum dolor, sit amet consectetur adipisicing." />
          </div>
          <div className="col-md-6 content">
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt molestias quam consequuntur modi hic unde blanditiis
              qui commodi! Molestias nostrum sapiente consequatur sequi fugit quas.
              Officia vitae minus corrupti sint!
            </p>
            <button onClick={() => (window.location.href = "tel:+11111111111")}>
              Order Now
            </button>
          </div>
        </div>
      </section>
      <div className="container pt-3 pb-5 mob-padding">
        <h2 className="faq-title-custom">FAQ's (How it works)</h2>
        <p className="faq-define">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt molestias quam consequuntur modi hic unde blanditiis
          qui commodi! Molestias nostrum sapiente consequatur sequi fugit quas.
          Officia vitae minus corrupti sint!
        </p>
        <Faq data={data} styles={styles} />
      </div>
      <section id="provider-contact-wrapper">
        <div className="row hide-mob">
          <div className="col-md-3 connection-image">
            <img src={leftimage} alt="" />
          </div>
          <div className="col-md-6 contact-us">
            <h3>
              Lorem ipsum dolor sit amet consectetur <span>Lorem</span> !
            </h3>
            <a
              onClick={() => setShowPopup(true)}
              style={{ cursor: "pointer" }}
            >
              Contact Us
            </a>
          </div>
          <div className="col-md-3 connection-image">
            <img src={rightimage} alt="" />
          </div>
        </div>

        <div className="contact-us-show-mob">
          <h3>
            Lorem ipsum dolor sit amet consectetur <span>Lorem</span> !
          </h3>
          <a onClick={() => setShowPopup(true)} style={{ cursor: "pointer" }}>
            Contact Us
          </a>
        </div>
        <div className="connection-image-bottom show-mob">
          <img src={leftimage} alt="" />
          <img src={rightimage} alt="" />
        </div>
      </section>
      {showPopup && (
        <Popup onClick={() => setShowPopup(false)}>
          <div className="container" id="contact-us">
            <div className="row">
              <div className="col-md-6 call-now">
                <h2>Lorem ipsum dolor sit.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sint.
                </p>
                <button
                  onClick={() => (window.location.href = "tel:+11111111111")}
                >
                  Call Now
                </button>
              </div>
              <div className="col-md-6">
                <div className="row form">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      name="zip"
                      id=""
                      placeholder="ZIP"
                      value={values.zip}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="phone"
                      id=""
                      placeholder="+12345678901"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="email"
                      id=""
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente nisi omnis maxime id, quod, placeat ullam ipsam
                    inventore corporis sequi rerum quo fugiat a dolorum quis.
                    Voluptatum similique recusandae quibusdam!
                  </p>
                  <button onClick={handleFormSubmit}>
                    {loader ? <DotLoader color="#fff" size={25} /> : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};

export default OtherSection;
