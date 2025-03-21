import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { VscVmActive } from "react-icons/vsc";
import { Link } from 'react-router-dom';


const JobCard = ({ job }) => {
    const { company, company_logo, description, jobType, location, requirements, salaryRange, status, title, _id } = job;

    return (
        <div className="card bg-blue-50 w-full shadow-sm p-6 hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div className='pt-4'>
                <div className='flex gap-4'>
                    <figure>
                        <img className='w-16'
                            src={company_logo || "logo"}
                            alt="Shoes" />
                    </figure>
                    <div className='py-1'>
                        <p className='text-xl font-bold'>{company}</p>
                        <p className='flex items-center gap-1'><IoLocationOutline />{location}</p>
                    </div>
                </div>
                <Link to={`/jobs/${_id}`} className="card-title hover:text-blue-600 pt-4">{title}</Link>
                <div className='text-gray-600 flex gap-6'>
                    <p>{jobType}</p>
                    <p className='flex items-center gap-2'><VscVmActive />{status}</p>
                </div>
                <p className='py-4'>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {requirements.map((requirement, idx) => <p key={idx} className='p-2  rounded bg-blue-200 font-semibold'>{requirement}</p>)}
                </div>
            </div>
            <div className="md:flex items-center py-2 gap-4 justify-between">
                <p className='py-4'><span className='font-bold'>Salary Range:</span> {salaryRange.min}-{salaryRange.max}</p>
                <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply Now</Link>
            </div>
        </div>
    );
};

export default JobCard;