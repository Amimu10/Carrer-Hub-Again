import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

      const [jobs, setJobs] = useState([]); 
      const [dataLength, setDataLength] = useState(4); 

      useEffect(() => {
             fetch("jobs.json")
             .then(res => res.json())
             .then(data => setJobs(data))
      }, []); 

    return (
        <div className="text-center">
           <h2 className="text-2xl font-bold">Featured Jobs</h2>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6">
            {
                jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
           </div>
           <div className={dataLength === jobs.length ? 'hidden' : ""}>
            <button onClick={() => setDataLength(jobs.length)} className="px-5 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] my-5">See All Jobs</button>
           </div>
        </div>
    );
};

export default FeaturedJobs;