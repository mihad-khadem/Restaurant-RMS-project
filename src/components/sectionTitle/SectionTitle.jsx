import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-4'>
            <p className='text-[#D99904]'>--{subHeading}--</p>
            <h2 className='text-3xl uppercase border-y-4 '>{heading}</h2>
        </div>
    );
};

export default SectionTitle;