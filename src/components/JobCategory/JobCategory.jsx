const JobCategory = ({joblist}) => {

    return (
        <div className='my-10'>
            <div className='text-center pt-10'>
                <h2 className='text-4xl font-bold'>Job Category List</h2>
                <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-4 w-4/6 mx-auto gap-4 mb-10">
                {
                    joblist.map(job => <div key={job.id} className="border border-gray-200 rounded-md p-5 bg-sky-50 shadow-md">
                        <img src={job.img} alt="" />
                        <h2 className="my-3 font-semibold text-lg">{job.position}</h2>
                        <small>{job.job_available} Jobs Available</small>
                        </div>)
                }
            </div>
        </div>
    );
};

export default JobCategory;