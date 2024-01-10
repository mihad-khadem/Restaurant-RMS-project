import React from "react";
import { Parallax } from "react-parallax";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Cover = ({ img, coverTitle, subTitle }) => {
  return (
    <section>
      <Parallax
      blur={{min: -50, max: 50}}
      bgImage={img}
      bgImageAlt="The menus"
      strength={100}
      >
        <div
          className="hero h-[400px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{coverTitle}</h1>
              <p className="mb-5">{subTitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
      <SectionTitle heading={'Todays Offer'}
      subHeading={" Don't Miss "}/>
    </section>
  );
};

export default Cover;
