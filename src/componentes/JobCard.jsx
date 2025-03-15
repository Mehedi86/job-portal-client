import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { VscVmActive } from "react-icons/vsc";


const JobCard = ({ job }) => {
    const { applicationDeadline, category, company, company_logo, description, hr_email, hr_name, jobType, location, requirements, responsibilities, salaryRange, status, title, _id } = job;
    console.log(job)
    return (
        <div className="card bg-blue-50 w-full shadow-sm p-6">
            <div className='flex gap-2'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className='py-1'>
                    <p className='text-xl font-bold'>{company}</p>
                    <p className='flex items-center gap-1'><IoLocationOutline />{location}</p>
                </div>
            </div>
            <div className='pt-4'>
                <h2 className="card-title">{title}</h2>
                <div className='text-gray-600 flex gap-6'>
                    <p>{jobType}</p>
                    <p className='flex items-center gap-2'><VscVmActive />{status}</p>
                </div>
                <p className='py-4'>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {requirements.map((requirement, idx)=><p key={idx} className='p-2  rounded bg-blue-200'>{requirement}</p>)}
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;