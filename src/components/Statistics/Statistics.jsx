import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const Statistics = () => {

    const data = [
        { name: 'Assignment-1 New Year New Mission', value: 60 },
        { name: 'Assignment-2 Responsive Website', value: 60 },
        { name: 'Assignment-3 Responsive Landing Page', value: 60 },
        { name: 'Assignment-4 Basic Java Script Problem Solving', value: 60 },
        { name: 'Assignment-5 Geometry Genius', value: 60 },
        { name: 'Assignment-6 AI Universe', value: 60 },
        { name: 'Assignment-7 Devtool And Debug', value: 60 },
        { name: 'Assignment-8 Develop Career Hub', value: 60 },
    ];

    return (
        <div className='w-5/6 mx-auto'>
            <div className="hero h-[20vh] md:h-[40vh] my-8" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Statics</h1>
                    </div>
                </div>
            </div>
            <div className='text-center flex justify-center'>
                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;