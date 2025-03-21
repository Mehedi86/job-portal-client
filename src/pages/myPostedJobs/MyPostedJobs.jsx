import React, { useEffect, useState } from "react";
import useHookContext from "../../hooks/UserContextHook";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [postedJobs, setPostedJobs] = useState([]);
    const { user } = useHookContext();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setPostedJobs(data);
            });
    }, [user?.email]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">
                Total jobs posted: {postedJobs?.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Job Title</th>
                            <th className="border p-2">Category</th>
                            <th className="border p-2">Type</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Total Applications</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postedJobs?.map((job, index) => (
                            <tr key={index} className="text-center">
                                <td className="border p-2">{job.title || "N/A"}</td>
                                <td className="border p-2">{job.jobCategory || "N/A"}</td>
                                <td className="border p-2">{job.jobType || "N/A"}</td>
                                <td className="border p-2">{job.status || "N/A"}</td>
                                <td className="border p-2">{job.applicationCount || "N/A"}</td>
                                <td className="border p-2 underline text-blue-400"><Link to={`/viewApplications/${job._id}`}>View Details</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;
