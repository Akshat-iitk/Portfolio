import "./Portfolio.css";
import ReactPlayer from "react-player";

import React, { useState } from "react";
import { featuredData } from "./featuredData";


const Portfolio = () => {
  const [showContent, setShowContent] = useState(featuredData);

  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__lists container grid">
        {showContent.map((itemData,index) => {
          return (
            <>
            <div className="portfolio__list" key={index}>
              <div className="portfolio__left" >
                <ReactPlayer
                  className="portfolio__video"
                  width="100%"
                  height="100%"
                  url={itemData.url}
                  controls={true}
                  light={true}
                />

                <div className="portfolio__links">
                  <a
                    href={itemData.gitUrl}
                    target="_blank"
                    className="portfolio__link"
                  >
                    Code <i class="contact__button-icon bx bxl-github"></i>
                  </a>
                  {itemData.liveUrl && (
                    <a
                      href={itemData.liveUrl}
                      target="_blank"
                      className="portfolio__link"
                    >
                      Live{" "}
                      <i class="contact__button-icon bx bxs-window-alt"></i>
                    </a>
                  )}
                </div>
              </div>

              <div className="portfolio__description">
                <h2 className="portfolio__header font-semibold">{itemData.mainHeader}</h2>
                <p className="portfolio__sub-description">
                  {itemData.mainContent}
                </p>

                {itemData.probDescription && (
                  <>
                    <h2 className="portfolio__header">
                      TechStack
                    </h2>
                    <p className="portfolio__sub-description">
                      {itemData.probDescription}
                    </p>
                  </>
                )}

                {itemData.featDescription && (
                  <>
                    <h2 className="portfolio__header">Features</h2>
                    <p className="portfolio__sub-description">
                      {itemData.featDescription}
                    </p>
                  </>
                )}
              </div>
            </div>
              </>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
