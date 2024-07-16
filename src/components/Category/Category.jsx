import React from 'react';

const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div>
            <img className="mx-auto" src={logo} alt="" />
            <h3 className="text-[18px] font-bold my-3">{category_name}</h3>
            <h3>{availability}</h3>
        </div>
    );
};

export default Category;