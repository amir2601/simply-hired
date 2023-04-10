import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetailes/JobDetails';

const FeaturedJob = ({featuredJob}) => {

    const handleShowDetails = (id) => {
        console.log(typeof id);
        const searchObject = featuredJob.find((j) => j.id == parseInt(id));
        localStorage.setItem('job-details', JSON.stringify(searchObject));
        console.log(searchObject);
    }

    console.log(featuredJob);

    return (
        <div>
            <div className='text-center pt-10'>
                <h2 className='text-4xl font-bold'>Job Category List</h2>
                <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 w-4/6 mx-auto gap-4">
                {
                    featuredJob.map(job => <div key={job.id} className="border border-blue-700 rounded-md p-5">
                        <img src={job.img} alt="" />
                        <h2 className="my-2 font-semibold text-lg">{job.position}</h2>
                        <p>{job.company_name}</p>
                        <div className='my-3'>
                            <small className='border border-blue-700 rounded-md py-2 px-4 mr-3'>{job.job_type}</small>
                            <small className='border border-blue-700 rounded-md py-2 px-4'>{job.job_time}</small>
                        </div>
                        <p className='mb-5'>{job.job_location}</p>
                        <Link to="/jobDetails" className='bg-blue-400 py-2 px-4 rounded-lg text-white'><button onClick={() => handleShowDetails(job.id)} href="">View Details</button></Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedJob;