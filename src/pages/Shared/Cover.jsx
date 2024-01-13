import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, coverTitle, subTitle }) => {
  return (
    <section className="mb-4">
      <Parallax
      blur={{min: -20, max: 20}}
      bgImage={img}
      bgImageAlt="The menus"
      strength={100}
      >
        <div
          className="hero md:h-[400px]">
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{coverTitle}</h1>
              <p className="mb-5">{subTitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Cover;
