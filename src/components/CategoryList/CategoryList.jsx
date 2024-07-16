import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const CategoryList = () => {
    const [categoryJobs, setCategoryJobs] = useState([]); 

    useEffect(() => {
           fetch("categories.json")
           .then(res => res.json())
           .then(data => setCategoryJobs(data))
    }, []);

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold ">Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-6">
                {
                   categoryJobs.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;