import React from 'react';
import { Link } from 'react-router-dom';

const JobDetails = () => {

    let jobDetails = {};
    const storedData = localStorage.getItem('job-details');
    jobDetails = JSON.parse(storedData);

    let showJobDetails = jobDetails;
    
    const {position, job_des, job_res, edu_req, exp, salary, phone, email, job_location} = showJobDetails;


    return (
        <div className='md:w-5/6 mx-auto my-8'>
            <div className="hero h-[40vh]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Job Details</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row mt-10'>
                <div className='mx-auto w-5/6 md:w-4/6 px-5'>
                    <p className='mb-10'>
                        <span className='text-lg font-bold'>Job Description:</span> {job_des}
                    </p>
                    <p className='mb-10'>
                        <span className='text-lg font-bold'>Job Responsibility:</span> {job_res}
                    </p>
                    <p className='mb-10'>
                        <span className='text-lg font-bold'>Educational Requirements:</span> {edu_req}
                    </p>
                    <p className='mb-10'>
                        <span className='text-lg font-bold'>Experiences:</span> {exp}
                    </p>
                </div>
                <div className='mx-auto w-5/6 md:w-2/6'>
                    <div className='py-5 px-10 bg-gradient-to-r from-sky-100 to-sky-400 rounded-lg'>
                        <h2 className='text-xl font-bold mb-8'>Job Details</h2>
                        <p className='mb-4'><span className='text-lg font-semibold'>Salary :</span> {salary} (Per Month)</p>
                        <p className='mb-4'><span className='text-lg font-semibold'>Job Title :</span> {position}</p>
                        <h2 className='text-xl font-bold mb-8'>Job Details</h2>
                        <p className='mb-4'><span className='text-lg font-semibold'>Phone :</span> {phone}</p>
                        <p className='mb-4'><span className='text-lg font-semibold'>Email :</span> {email}</p>
                        <p className='mb-4'><span className='text-lg font-semibold'>Address :</span> {job_location}</p>
                    </div>
                    <Link to="/appliedJobs"><button className='btn btn-primary mt-3 w-full text-white font-semibold'>Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;