import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className=" bg-base-100 p-6 shadow-md text-left ">
        <img className="h-[40px] w-[60px] mb-4" src={logo} alt="" />
        <h4 className="text-base text-[#474747] font-semibold">{job_title}</h4>
        <h4 className="mb-4">{company_name}</h4>
        <div className="flex gap-4 mb-4">
          <button className="text-[#9873FF] border px-4 py-2 border-[#9873FF] rounded-sm">{remote_or_onsite}</button>
          <button className="text-[#9873FF] border px-4 py-2 border-[#9873FF] rounded-sm ">{job_type}</button>
        </div>
        <div className="flex gap-8 mb-3">
          <div className="flex gap-2 items-center">
          <IoLocationOutline />  <h3>{location}</h3>
          </div>
        <div className="flex gap-2 items-center">
        <AiOutlineDollar /><h3> Salary: {salary}</h3>
          </div>
        </div>
      <Link to={`/job/${id}`}>
      <button className="px-5 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
      </Link>
      </div>
    </div>
  );
};

export default Job;
