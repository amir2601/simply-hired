import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const applied = useLoaderData();
    console.log(applied);


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
            <div className='mt-8 flex gap-3 flex-col md:flex-row md:px-5'>

                {
                    applied.map(job => <div>
                        <div className='bg-gray-100 p-8'>
                            <img src="../../../assets/Logo/google-1-1 1.png" alt="" />
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <h2 className='text-lg font-bold'>Technical Database Engineer</h2>
                                <p>Google LLC</p>
                                <div className='my-3'>
                                    <small className='border border-blue-700 rounded-md py-2 px-4 mr-3'>Job Type</small>
                                    <small className='border border-blue-700 rounded-md py-2 px-4'>Job Time</small>
                                </div>
                                <div className='flex gap-3'>
                                    <span>Dhaka, Bangladesh</span>
                                    <span>Salary : 70K - 90K</span>
                                </div>
                            </div>
                            <Link to="/jobDetails"><button className='btn btn-primary md:ms-[500px] text-white'>View Details</button></Link>
                        </div>
                    </div>)
                }

                {/* <div className='bg-gray-100 p-8'>
                    <img src="../../../assets/Logo/google-1-1 1.png" alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                        <h2 className='text-lg font-bold'>Technical Database Engineer</h2>
                        <p>Google LLC</p>
                        <div className='my-3'>
                            <small className='border border-blue-700 rounded-md py-2 px-4 mr-3'>Job Type</small>
                            <small className='border border-blue-700 rounded-md py-2 px-4'>Job Time</small>
                        </div>
                        <div className='flex gap-3'>
                            <span>Dhaka, Bangladesh</span>
                            <span>Salary : 70K - 90K</span>
                        </div>
                    </div>
                    <Link to="/jobDetails"><button className='btn btn-primary md:ms-[500px] text-white'>View Details</button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default AppliedJobs;