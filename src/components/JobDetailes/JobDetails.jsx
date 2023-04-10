import React from 'react';

const JobDetails = () => {

    let jobDetails = {};
    const storedData = localStorage.getItem('job-details');
    jobDetails = JSON.parse(storedData);

    let showJobDetails = jobDetails;
    console.log(showJobDetails);
    
    const {position, job_des, job_res, edu_req, exp, salary, phone, email, job_location} = showJobDetails;


    return (
        <div className='md:w-5/6 mx-auto my-8'>
            <div className='h-[25vh] text-center flex justify-center items-center bg-blue-200'>
                <h1 className='text-4xl font-semibold'>Job Details</h1>
            </div>
            <div className='flex flex-col md:flex-row mt-10'>
                <div className='mx-auto w-5/6 md:w-4/6'>
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
                    <div className='py-5 px-10 bg-gray-300 rounded-lg'>
                        <h2 className='text-xl font-bold mb-8'>Job Details</h2>
                        <p className='mb-4'><span className='text-lg font-semibold'>Salary :</span> {salary} (Per Month)</p>
                        <p className='mb-4'><span className='text-lg font-semibold'>Job Title :</span> {position}</p>
                        <h2 className='text-xl font-bold mb-8'>Job Details</h2>
                        <p className='mb-4'><span className='text-lg font-semibold'>Phone :</span> {phone}</p>
                        <p className='mb-4'><span className='text-lg font-semibold'>Email :</span> {email}</p>
                        <p className='mb-4'><span className='text-lg font-semibold'>Address :</span> {job_location}</p>
                    </div>
                    <button className='btn btn-primary mt-3 w-full text-white font-semibold'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;