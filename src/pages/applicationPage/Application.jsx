import React from 'react';
import { useParams } from 'react-router-dom';
import useHookContext from '../../hooks/UserContextHook';
import Swal from 'sweetalert2';

const Application = () => {
    const { id } = useParams();
    const { user } = useHookContext();

    const applyJobs = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const job_id = id;
        const user_email = user?.email;

        const applyInfo = {
            linkedin, github, resume, job_id, user_email
        }

        fetch('https://job-portal-server-umber-ten.vercel.app/job-application', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(applyInfo)
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    icon: "success",
                    draggable: true
                });
                form.reset();
            }
        })
    }

    return (
        <div className="bg-base-200 min-h-screen">
            <h2 className='text-4xl font-bold text-center py-12'>Apply Jobs and Good luck!!</h2>
            <div className='p-6 m-12 border-4'>
                <form onSubmit={applyJobs} className="fieldset">
                    <label className="text-xl font-semibold">LinkedIn URL</label>
                    <input type="text" className="input w-full" placeholder="LinkedIn URL" name='linkedin' />
                    <label className="text-xl font-semibold">GitHub URL</label>
                    <input type="text" className="input w-full" placeholder="GitHub URL" name='github' />
                    <label className="text-xl font-semibold">Resume URL</label>
                    <input type="text" className="input w-full" placeholder="Resume URL" name='resume' />
                    <button className='btn btn-neutral mt-10'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Application;