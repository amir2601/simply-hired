import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetailes/JobDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const FeaturedJob = ({ featuredJob }) => {
    const [visible, setVisible] = useState(4);

    const seeAllJob = () => {
        setVisible((previous) => previous + 2);
    }

    const handleShowDetails = (id) => {
        const searchObject = featuredJob.find((j) => j.id == parseInt(id));
        localStorage.setItem('job-details', JSON.stringify(searchObject));
    }

    return (
        <div className='mb-10'>
            <div className='text-center pt-10'>
                <h2 className='text-4xl font-bold'>Job Category List</h2>
                <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 w-4/6 mx-auto gap-4">
                {
                    featuredJob.slice(0, visible).map(job => <div key={job.id} className="border shadow-lg border-gray-200 rounded-md p-5">
                        <img src={job.img} alt="" />
                        <h2 className="my-2 font-semibold text-lg">{job.position}</h2>
                        <p>{job.company_name}</p>
                        <div className='my-3'>
                            <small className='border border-blue-400 rounded-md py-2 px-4 mr-3'>{job.job_type}</small>
                            <small className='border border-blue-400 rounded-md py-2 px-4'>{job.job_time}</small>
                        </div>
                        <div className='mb-5'>
                            <span className='me-2'><FontAwesomeIcon icon={faLocationDot} /> {job.job_location}</span>
                            <span><FontAwesomeIcon icon={faDollarSign} /> {job.salary}</span>
                        </div>
                        <Link to="/jobDetails" className='bg-gradient-to-r from-blue-400 to-blue-700 py-2 px-4 rounded-lg text-white'><button onClick={() => handleShowDetails(job.id)} href="">View Details</button></Link>
                    </div>)
                }
            </div>
            <div className='text-center my-5'>
                <button onClick={seeAllJob} className='px-6 py-2 rounded-lg text-white bg-gradient-to-r from-blue-400 to-blue-700'>See All</button>
            </div>
        </div>
    );
};

export default FeaturedJob;