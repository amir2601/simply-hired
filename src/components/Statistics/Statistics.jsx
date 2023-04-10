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
    );
};

export default Statistics;