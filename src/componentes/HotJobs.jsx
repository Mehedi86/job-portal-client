import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';


const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Todays  Top Jobs</h2>
            <div className='mx-4 md:mx-0 grid grid-cols-2 lg:grid-cols-3 gap-4 py-12'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;