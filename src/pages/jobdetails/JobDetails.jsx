import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {
        applicationDeadline, category, company, company_logo, description,
        hr_email, hr_name, jobType, location, requirements, responsibilities,
        salaryRange, status, title
    } = useLoaderData();

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex items-center space-x-4 mb-6">
                <img src={company_logo} alt={company} className="w-16 h-16 object-cover rounded-full" />
                <div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-gray-600">{company}</p>
                </div>
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Job Type:</strong> {jobType}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Status:</strong> {status}</p>
                <p><strong>Salary Range:</strong> {salaryRange.currency.toUpperCase()} {salaryRange.min} - {salaryRange.max}</p>
                <p><strong>Application Deadline:</strong> {applicationDeadline}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    {responsibilities.map((task, index) => <li key={index}>{task}</li>)}
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    {requirements.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </div>
            <div className="border-t pt-4 text-gray-700 md:flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Contact HR</h2>
                    <p><strong>Name:</strong> {hr_name}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${hr_email}`} className="text-blue-600 underline">{hr_email}</a></p>
                </div>
                <div>
                    <button className='btn'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
