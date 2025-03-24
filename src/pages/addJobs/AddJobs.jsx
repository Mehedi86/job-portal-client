import React from 'react';
import useHookContext from '../../hooks/UserContextHook';
import Swal from 'sweetalert2';

const AddJobs = () => {
    const { user } = useHookContext();
    const handleAddJobs = e => {
        e.preventDefault();

        // take input Using FormData API (For File Uploads & Raw Data)
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData);
        const { salaryMin, salaryMax, currency, ...newJobs } = initialData;

        newJobs.responsibilities = newJobs.responsibilities.split(', ');
        newJobs.requirements = newJobs.requirements.split(', ');
        newJobs.salaryRange = { salaryMin, salaryMax, currency }

        fetch('https://job-portal-server-umber-ten.vercel.app/addJobs', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJobs)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                      });
                }
            })
    }

    return (
        <div className="bg-base-200 min-h-screen">
            <h2 className='text-4xl font-bold text-center py-12'>Add a Job</h2>
            <div className='p-6 m-12 border-4'>
                <form onSubmit={handleAddJobs} className="fieldset">
                    <label className="text-xl font-semibold">Job Title</label>
                    <input type="text" className="input w-full" placeholder="Finance Manager" name="title" />

                    <label className="text-xl font-semibold">Company Name</label>
                    <input type="text" className="input w-full" placeholder="Local Inch Ltd" name="company" />

                    <label className="text-xl font-semibold">Company Logo URL</label>
                    <input type="text" className="input w-full" placeholder="Company Logo URL" name="company_logo" />

                    <label className="text-xl font-semibold">Job Category</label>
                    <select className="input w-full cursor-pointer" name="jobCategory">
                        <option hidden>Select Job Category</option>
                        <option value="Finance">Finance</option>
                        <option value="Technology">Technology</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Sales">Sales</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Design">Design</option>
                        <option value="Legal">Legal</option>
                        <option value="Administration">Administration</option>
                        <option value="Supply Chain">Supply Chain</option>
                        <option value="Construction">Construction</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Retail">Retail</option>
                    </select>

                    <label className="text-xl font-semibold">Job Type</label>
                    <select className="input w-full cursor-pointer" name="jobType">
                        <option hidden>Select a Job Type</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                    </select>

                    <label className="text-xl font-semibold">Location</label>
                    <input type="text" className="input w-full" placeholder="Gulshan, Dhaka" name="location" />

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className="text-xl font-semibold">Salary Range (Min)</label>
                            <input type="number" className="input w-full" placeholder="50000" name="salaryMin" />
                        </div>

                        <div>
                            <label className="text-xl font-semibold">Salary Range (Max)</label>
                            <input type="number" className="input w-full" placeholder="70000" name="salaryMax" />
                        </div>

                        <div>
                            <label className="text-xl font-semibold">Currency</label>
                            <select className="input w-full cursor-pointer" name="currency" defaultValue="">
                                <option hidden>Select Currency</option>
                                <option value="Full-Time">BDT</option>
                                <option value="Part-Time">USD</option>
                                <option value="Contract">INR</option>
                            </select>
                        </div>
                    </div>

                    <label className="text-xl font-semibold">Application Deadline</label>
                    <input type="date" className="input w-full" name="applicationDeadline" />

                    <label className="text-xl font-semibold">Job Description</label>
                    <textarea className="input w-full" placeholder="Job description here..." name="description"></textarea>

                    <label className="text-xl font-semibold">Responsibilities</label>
                    <textarea className="input w-full" placeholder="Enter Responsiblities in every new line" name="responsibilities"></textarea>

                    <label className="text-xl font-semibold">Requirements</label>
                    <textarea className="input w-full" placeholder="Enter Job Requirements in every new line" name="requirements"></textarea>

                    <label className="text-xl font-semibold">HR Name</label>
                    <input type="text" className="input w-full" placeholder="Md. Alamgir" name="hr_name" />

                    <label className="text-xl font-semibold">HR Email</label>
                    <input type="email" className="input w-full" placeholder="finance.hr@securefinance.com" name="hr_email" defaultValue={user?.email} />

                    <label className="text-xl font-semibold">Job Status</label>
                    <select className="input w-full" name="status">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>

                    <button className="btn btn-neutral mt-10">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;

