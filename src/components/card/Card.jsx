import React from "react";

const Card = ({ _id ,title, img, recipe }) => {
  return (
    <section>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[300px]"
            src={img}
            alt='Foods'
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-2xl text-center">{title}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline uppercase  border-0 border-b-4 text-[#BB8506] hover:text-[#BB8506]">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
