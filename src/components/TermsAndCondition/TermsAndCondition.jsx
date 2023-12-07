import React from "react";
import "./termsAndCondition.scss";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section id="terms-and-condition">
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          <b>Lorem, ipsum dolor:</b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum, amet assumenda! Quasi architecto dolores aliquid
          mollitia a? Corporis ut magni, deleniti quos, unde ad dolor
          maxime atque eveniet quis repellendus?
          <br />
          <br />
          <b>Lorem, ipsum:</b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam eligendi odio voluptatem fugiat eius ut velit
          excepturi explicabo ipsa nemo veritatis aperiam laborum
          dignissimos temporibus est reprehenderit corrupti, nesciunt
          accusamus quaerat qui rem quidem repudiandae consequatur dolor?
          A, ex obcaecati.
          <br />
          <br />
          <b>Lorem:</b>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ab optio nam unde similique! Minus commodi est, sunt,
          fuga facere obcaecati accusamus non at dicta repellat
          laudantium quos nam totam ut, porro distinctio quibusdam
          sapiente nostrum.
          <br />
          <br />
          <b>Lorem ipsum dolor sit:</b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi, cum perferendis maxime ratione nihil vel, dolorum
          voluptatibus fuga nesciunt eum cumque aperiam perspiciatis
          ut hic nam? Ipsa natus voluptate consequatur ipsum possimus
          nam modi. Animi eaque eum facere iste unde?
          <br />
          <br />
        </p>
      </section>
    </>
  );
};

export default TermsAndConditions;
