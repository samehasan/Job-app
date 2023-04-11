import React from 'react';
import './Job.css';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id,jobTitle, companyLogo, jobType, time, location, salary } = job;

    // const handlejobdetail = () => {
    //    console.log(job);
    //   };
    return (
        <div className='home-container'>
            <div className='job-container'>
                <img src={companyLogo} alt="" />
                <h1>{jobTitle}</h1>
                <p>{jobType} | {time}</p>
                <p><MapPinIcon className='icon' />Location:{location} | <CurrencyDollarIcon className='icon' /> Salary:{salary}</p>
                
                 <Link to={`../job/${job.id}`}> <div>
                  <button >View Details</button>
                  </div></Link>
               
            </div>
            
        </div>
    );
};

export default Job;
