import React, { useEffect, useState } from 'react';
import useHookContext from '../../hooks/UserContextHook';

const MyApplication = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useHookContext();

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [user?.email])

    return (
        <div>
            <h2>loaded data : {jobs.length}</h2>
        </div>
    );
};

export default MyApplication;