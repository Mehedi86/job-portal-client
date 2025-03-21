import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
    const loadedData = useLoaderData();

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Total Applications: {loadedData?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">User Email</th>
                            <th className="border p-2">LinkedIn</th>
                            <th className="border p-2">GitHub</th>
                            <th className="border p-2">Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadedData?.map((application, index) => (
                            <tr key={index} className="text-center">
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;
