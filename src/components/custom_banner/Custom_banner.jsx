import React from "react";

const Custom_banner = ({ heading, customCss, bannerImg }) => {
  return (
    <div className="">
      <div className="relative my-4">
        <img className="" src={bannerImg} alt="" />
        <div style={{position: '', top:'2px', borderRadius: '10px'}} className={customCss}>
          <h2 className="text-center text-3xl font-bold">{heading}</h2>
          <p className="text-wrap">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam molestiae consequatur minima dolor, doloremque quos officiis magni, sunt a commodi sint, nostrum sapiente nisi suscipit.</p>
        </div>
      </div>
    </div>
  );
};

export default Custom_banner;
