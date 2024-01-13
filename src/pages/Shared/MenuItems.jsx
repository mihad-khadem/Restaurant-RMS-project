import React from 'react';

const MenuItems = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='flex space-x-4 space-y-3 items-center md:p-4 border rounded-md p-1 hover:shadow-md'>
           <div>
           <img className='w-[120px] ' style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="Food" />
           </div>
            <div>
                <h3 className='uppercase text-[#151515] font-cinzel'>{name}</h3>
                <p className='font-inter text-base  text-[#737373] '>{recipe}</p>
            </div>
            <h3 className='text-yellow-600'>${price}</h3>
        </div>
    );
};

export default MenuItems;