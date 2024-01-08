import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured-item text-white ">
      <div className="bg-slate-950/70 py-1">
        <SectionTitle heading={"Check it out"} subHeading={"From our menu"} />
      </div>
      <div className="md:flex justify-center items-center pt-10 pb-28 px-36 bg-slate-950/70">
        <div>
          <img className="rounded-md" src={featuredImg} alt="food" />
        </div>
        <div className="md:ml-10 space-y-3">
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where can I get some??</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            quae fugit omnis voluptatem eaque, laboriosam aperiam. Illo quae
            autem consequuntur.
          </p>
          <button className="btn btn-outline uppercase text-white border-0 border-b-4">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
