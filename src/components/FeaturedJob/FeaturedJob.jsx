import React from 'react';

const FeaturedJob = ({featuredJob}) => {
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
                        <p>{job.job_location}</p>
                        <button>View Details</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedJob;