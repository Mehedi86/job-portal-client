import React from 'react';
import { IoIosCodeWorking } from "react-icons/io";

const JobsCategory = () => {

    const jobCategories = [
        "Software Development",
        "Data Science & Analytics",
        "Cybersecurity",
        "Cloud Computing",
        "IT Support",
        "Web Development",
        "Mobile App Development"
    ]

    return (
        <div className='grid grid-cols-4 gap-6 my-12'>
            {
                jobCategories.map((jobcategory, id)=><div key={id} className='p-6 flex items-center gap-6 border-2'><IoIosCodeWorking size={40}/> {jobcategory}</div>)
            }
        </div>
    );
};

export default JobsCategory;