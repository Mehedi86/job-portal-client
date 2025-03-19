import React, { useEffect, useState } from 'react';
import useHookContext from '../../hooks/UserContextHook';

const MyPostedJobs = () => {
    const [postedJobs, setPostedJobs] = useState();

    const { user } = useHookContext();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPostedJobs(data)
            })
    }, [user?.email])
    return (
        <div>
            <h2 className='text-2xl font-bold'>Totol job you posted: {postedJobs?.length}</h2>
        </div>
    );
};

export default MyPostedJobs;