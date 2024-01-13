const CustomBtn = ({ btnTitle }) => {
    return (
        <div className="flex justify-center py-2">
            <button className='btn btn-outline uppercase  border-0 border-b-4'>{btnTitle}</button>
        </div>
    );
};

export default CustomBtn;