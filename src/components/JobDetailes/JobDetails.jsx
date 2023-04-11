import React from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../../Utils/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign, faCalendarCheck, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const JobDetails = () => {

    let jobDetails = {};
    const storedJobData = localStorage.getItem('job-details');
    jobDetails = JSON.parse(storedJobData);

    let showJobDetails = jobDetails;
    
    const {id ,position, job_des, job_res, edu_req, exp, salary, phone, email, job_location} = showJobDetails;

    const handleAddToDb = (id) => {
        addToDb(id)
    }


    return (
        <div className='md:w-5/6 mx-auto my-8'>
            <div className="hero h-[20vh] md:h-[40vh]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
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
                    <div className='py-5 px-10 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg'>
                        <h2 className='text-xl font-bold mb-8'>Job Details</h2>
                        <hr className='border border-black mb-5' />
                        <p className='mb-4'><span className='text-lg font-semibold'><FontAwesomeIcon icon={faDollarSign} /> Salary :</span> {salary} (Per Month)</p>
                        <p className='mb-4'><span className='text-lg font-semibold'><FontAwesomeIcon icon={faCalendarCheck} /> Job Title :</span> {position}</p>
                        <h2 className='text-xl font-bold mb-8'>Contact Information:</h2>
                        <hr className='border border-black mb-5' />
                        <p className='mb-4'><span className='text-lg font-semibold'><FontAwesomeIcon icon={faPhone} /> Phone :</span> {phone}</p>
                        <p className='mb-4'><span className='text-lg font-semibold'><FontAwesomeIcon icon={faEnvelope} /> Email :</span> {email}</p>
                        <p className='mb-4'><span className='text-lg font-semibold'></span><FontAwesomeIcon icon={faLocationDot} /> Address : {job_location}</p>
                    </div>
                    <button onClick={() => handleAddToDb(id)} className='btn btn-primary mt-3 w-full text-white font-semibold'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;