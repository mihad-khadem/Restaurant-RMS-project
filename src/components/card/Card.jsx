import React from "react";

const Card = ({ _id, title, img, recipe, price }) => {
  return (
    <section>
      <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[300px]"
            src={img}
            alt='Foods'
          />
        </figure>
        {
          price && <p className="absolute right-5 top-5 bg-[#BB8506] text-white p-1 rounded-md font-bold">{price} $</p>
        }
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
