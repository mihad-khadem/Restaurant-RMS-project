import React from 'react';

const CustomBtn = ({btnTitle}) => {
    return (
        <div>
            <button className='btn btn-outline uppercase text-white border-0 border-b-4'>{btnTitle}</button>
        </div>
    );
};

export default CustomBtn;