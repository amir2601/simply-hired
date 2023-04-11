import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const applied = useLoaderData();
    console.log(applied);

    const handleShowDetails = (id) => {
        console.log(typeof id);
        const searchObject = applied.find((j) => j.id == parseInt(id));
        localStorage.setItem('job-details', JSON.stringify(searchObject));
    }


    return (
        <div className='w-5/6 mx-auto'>
            <div className="hero h-[20vh] md:h-[40vh] my-8" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Applied Jobs</h1>
                    </div>
                </div>
            </div>
            <div className='mt-8 gap-3 md:px-5'>

                {
                    applied.map(job => 
                    <div key={job.id} className='flex mb-5 gap-5'>
                        <div className='bg-gray-100 p-8 flex items-center justify-center w-1/6'>
                            <img src={job.img} alt="" />
                        </div>
                        <div className='tems-center w-5/6 flex justify-between items-center'>
                            <div>
                                <h2 className='text-lg font-bold'>{job.position}</h2>
                                <p>{job.company_name}</p>
                                <div className='my-3'>
                                    <small className='border border-blue-700 rounded-md py-2 px-4 mr-3'>{job.job_type}</small>
                                    <small className='border border-blue-700 rounded-md py-2 px-4'>{job.job_time}</small>
                                </div>
                                <div className='flex gap-3'>
                                    <span>{job.job_location}</span>
                                    <span>Salary: {job.salary}</span>
                                </div>
                            </div>
                            <Link onClick={() => handleShowDetails(job.id)} to="/jobDetails"><button className='btn btn-primary text-white'>View Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;