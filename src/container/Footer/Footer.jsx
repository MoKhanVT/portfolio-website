import React from "react";
import "./footer.scss";
import routes from "../../config/routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id="footer-wrapper">
        
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, illo.{" "}
          <a
            href="https://www.xfinity.com/policies"
            target="_blank"
            style={{ color: "white", fontWeight: "500" }}
            rel="nofollow"
          >
            www.example.com
          </a>{" "}
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas iure magni corporis voluptate, voluptates cumque,
          maiores fugiat quasi deleniti facilis quia culpa tenetur ex ut
          totam, laborum earum quam dignissimos.
          <br />
          <br />
          <Link
            to={routes.termsAndCondition}
            style={{ color: "white", fontWeight: "500" }}
          >
            Read more
          </Link>
          <br />
          <br />© 2023 example, Inc. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default Footer;
