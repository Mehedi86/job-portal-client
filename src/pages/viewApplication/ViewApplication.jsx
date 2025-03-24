import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
    const loadedData = useLoaderData();
    const selectingHandler = (e, id) => {
        const data = {
            status: e.target.value
        }

        fetch(`https://job-portal-server-umber-ten.vercel.app/job-application/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Total Applications: {loadedData?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">No.</th>
                            <th className="border p-2">User Email</th>
                            <th className="border p-2">LinkedIn</th>
                            <th className="border p-2">GitHub</th>
                            <th className="border p-2">Resume</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadedData?.map((application, index) => (
                            <tr key={index} className="text-center">
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">{application?.user_email || "N/A"}</td>
                                <td className="border p-2">
                                    <a href={application?.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        View
                                    </a>
                                </td>
                                <td className="border p-2">
                                    <a href={application?.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        View
                                    </a>
                                </td>
                                <td className="border p-2">
                                    <a href={application?.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        View
                                    </a>
                                </td>
                                <td className="border p-2">
                                    <select onChange={(e) => selectingHandler(e, application._id)} defaultValue="Select an Action" className="select select-accent">
                                        <option disabled={true}>Select an Action</option>
                                        <option>Select for Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;
