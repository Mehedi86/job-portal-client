import React, { useEffect, useState } from 'react';
import useHookContext from '../../hooks/UserContextHook';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyApplication = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useHookContext();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/job-applications?email=${user?.email}`)
            .then(res => setJobs(res.data));
    }, [user?.email, axiosSecure]);

    const deleteApplication = id => {
        fetch(`https://job-portal-server-umber-ten.vercel.app/job-application/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Successfully Deleted!",
                        icon: "success",
                        draggable: true
                    });
                    const remaining = jobs.filter(job => job._id !== id);
                    setJobs(remaining);
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <h2 className="text-xl font-bold my-4">Total Application: {jobs.length}</h2>
            <table className="table w-full table-zebra">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Company Logo</th>
                        <th>Title</th>
                        <th>GitHub</th>
                        <th>LinkedIn</th>
                        <th>Resume</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                        <tr key={job._id}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={job.company_logo || "N/A"} alt="Company Logo" className="w-12 h-12 rounded-full" />
                            </td>
                            <td>{job.title}</td>
                            <td>
                                <a href={job.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub</a>
                            </td>
                            <td>
                                <a href={job.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn</a>
                            </td>
                            <td>
                                <a href={job.resume} target="_blank" rel="noopener noreferrer" className="text-green-500 underline">Resume</a>
                            </td>
                            <td>
                                <button onClick={() => deleteApplication(job._id)} className='btn'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyApplication;