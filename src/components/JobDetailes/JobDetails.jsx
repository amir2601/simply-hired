import React from 'react';

const JobDetails = () => {
    return (
        <div className='md:w-5/6 mx-auto my-8'>
            <div className='h-[25vh] text-center flex justify-center items-center bg-blue-200'>
                <h1 className='text-4xl font-semibold'>Job Details</h1>
            </div>
            <div className='flex flex-col md:flex-row mt-10'>
                <div className='mx-auto w-5/6 md:w-4/6'>
                    <p className='mb-10'>
                        <span className='text-lg font-bold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.
                    </p>
                    <p className='mb-10'>
                        <span className='text-lg font-bold'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </p>
                    <p className='mb-10'>
                        <span className='text-lg font-bold'>Educational Requirements:</span> Bachelor degree to complete any reputational university.
                    </p>
                    <p className='mb-10'>
                        <span className='text-lg font-bold'>Experiences:</span> 2-3 Years in this field.
                    </p>
                </div>
                <div className='mx-auto w-5/6 md:w-2/6'>
                    <div className='py-5 px-10 bg-gray-300 rounded-lg'>
                        <h2 className='text-xl font-bold mb-8'>Job Details</h2>
                        <p className='mb-4'><span className='text-lg font-semibold'>Salary :</span> 100K - 150K (Per Month)</p>
                        <p className='mb-4'><span className='text-lg font-semibold'>Job Title :</span> Product Designer</p>
                        <h2 className='text-xl font-bold mb-8'>Job Details</h2>
                        <p className='mb-4'><span className='text-lg font-semibold'>Phone :</span> 01750-00 00 00</p>
                        <p className='mb-4'><span className='text-lg font-semibold'>Email :</span> info@gmail.com</p>
                        <p className='mb-4'><span className='text-lg font-semibold'>Address :</span> Dhanmondi 32, Sukrabad
                            Dhaka, Bangladesh</p>
                    </div>
                    <button className='btn btn-primary mt-3 w-full text-white font-semibold'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;