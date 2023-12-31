import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-[#D99904] my-2'>--{subHeading}--</p>
            <h2 className='text-3xl font-bold uppercase border-y-4 py-3'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;