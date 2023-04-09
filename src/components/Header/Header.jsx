import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* <nav className='flex gap-4'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedJobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </nav> */}
            <div className="navbar bg-base-100 w-4/6 mx-auto">
                <div className="navbar-start text-2xl font-bold">
                    <Link to="/">Simply Hired</Link>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav className='flex gap-8'>
                        <Link to="/">Home</Link>
                        <Link to="/statistics">Statistics</Link>
                        <Link to="/appliedJobs">Applied Jobs</Link>
                        <Link to="/blog">Blog</Link>
                    </nav>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">Star Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;