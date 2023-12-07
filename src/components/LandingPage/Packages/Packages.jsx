import React from "react";
import "./packages.scss";
import { packages } from "../../../constants/LandingPage";

const Packages = () => {
  return (
    <>
      <section id="packages-wrapper">
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="packages">
          {packages?.map((item) => {
            return (
              <>
                <div className="package-cards">
                  <div className="cards">
                    <h3>{item?.name}</h3>
                    <p>{item?.define}</p>
                    <div className="mbps">
                      <p>{item?.upMbps}</p>
                      <span></span>
                      <p>{item?.downMbs}</p>
                    </div>
                    <ul>
                      {item?.featureList?.map((data) => {
                        return (
                          <>
                            <li>
                              <p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="17"
                                  height="16"
                                  viewBox="0 0 17 16"
                                  fill="none"
                                >
                                  <g clip-path="url(#clip0_647_932)">
                                    <path
                                      d="M15.5368 5.93419C15.5774 6.00671 15.608 6.04062 15.6166 6.07948C16.192 8.67028 15.6937 11.025 14.0309 13.0879C12.7525 14.6741 11.0716 15.5859 9.07548 15.9094C8.46666 16.0087 7.84753 16.0263 7.23415 15.9618C6.11025 15.8415 5.02822 15.5507 4.03997 14.9545C2.81226 14.2137 1.78581 13.2752 1.06985 12.0127C0.521366 11.045 0.210151 9.99885 0.0744998 8.89675C0.0411992 8.62722 -0.000916413 8.35596 0.00104245 8.08545C0.0103471 6.19803 0.575724 4.5039 1.73953 3.01644C3.0101 1.39112 4.67122 0.442462 6.68077 0.111557C8.88204 -0.251027 10.8767 0.277877 12.6798 1.58689C12.8441 1.70644 12.8448 1.73366 12.7011 1.87845C12.5248 2.05565 12.3489 2.23336 12.1734 2.41156C12.0302 2.55758 11.9714 2.56501 11.8061 2.44398C11.145 1.96086 10.4232 1.601 9.6269 1.41513C7.25325 0.860735 5.13327 1.36711 3.33111 3.04119C2.17146 4.11855 1.491 5.47632 1.2743 7.05214C0.784588 10.6186 3.04659 13.893 6.54756 14.6387C8.80907 15.1203 10.8191 14.5382 12.5192 12.9557C13.6027 11.9472 14.2777 10.6911 14.5576 9.22443C14.68 8.58688 14.6582 7.94512 14.6049 7.30385C14.5867 7.08679 14.6352 6.91503 14.7949 6.75935C15.0206 6.53958 15.2283 6.30049 15.4423 6.06834C15.4761 6.02537 15.5077 5.98059 15.5368 5.93419Z"
                                      fill="#D6111E"
                                    />
                                    <path
                                      d="M4.4772 5.00058L7.92553 8.48387L15.6924 0.638184C15.8332 0.846577 15.9686 1.04606 16.1031 1.24629C16.391 1.67528 16.6787 2.10502 16.9662 2.5355C17.0276 2.62732 17.0024 2.77855 16.9172 2.85032C16.8636 2.89462 16.8127 2.94239 16.7637 2.99164C13.8907 5.8938 11.0172 8.79596 8.14321 11.6981C8.07735 11.7645 8.00854 11.8276 7.9035 11.9278C7.80923 11.8159 7.72646 11.7028 7.62926 11.6046C6.19276 10.1526 4.75552 8.70224 3.31755 7.25356C3.14321 7.07734 3.1393 7.01274 3.27715 6.80583C3.67235 6.21209 4.06755 5.61685 4.4772 5.00058Z"
                                      fill="#D6111E"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_647_932">
                                      <rect
                                        width="17"
                                        height="16"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </p>
                              <p>{data}</p>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="order-wrapper">
                    <h4>
                      ${item?.amount}<span>/Month</span>
                    </h4>
                    <button
                      onClick={() =>
                        (window.location.href = "tel:+11111111111")
                      }
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Packages;
