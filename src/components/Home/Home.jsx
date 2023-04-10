import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    const [fJob, setFJob] = useState([]);

    const featuredJob = useLoaderData()
    // console.log(featuredJob);

    const [joblist, setJoblist] = useState([])

    useEffect(() => {
        fetch('joblist.json')
        .then(res => res.json())
        .then(data => setJoblist(data))
    }, [])

    return (
        <div>
            <div className='w-5/6 mx-auto my-10 grid md:grid-cols-2'>
                <div className='flex items-center'>
                    <div>
                        <div className='text-5xl font-bold'>
                            <h1>One Step</h1>
                            <h1 className='my-3'>Closer To Your</h1>
                            <h1 className='text-primary'>Dream Job</h1>
                        </div>
                        <p className='my-6'>
                            Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                        </p>
                        <button className='btn btn-primary text-white'>Get Started</button>
                    </div>
                </div>
                <div>
                    <img className='' src="../../../assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
            <JobCategory joblist={joblist}></JobCategory>
            <FeaturedJob featuredJob={featuredJob}></FeaturedJob>
        </div>
    );
};

export default Home;