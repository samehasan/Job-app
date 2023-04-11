import React from 'react';
import './Job.css';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
const Job = ({job,handlejobdetail}) => {
    const {jobTitle,companyLogo,jobType,time,location,salary}=job;
    return (
        
        <div className='home-container'>
            
             <div className='job-container'>
              
                <img src={companyLogo} alt="" />
            <h1>{jobTitle}</h1>
            <p>{jobType}    |  {time} </p>
            <p><MapPinIcon className='icon' />Location:{location}  | <CurrencyDollarIcon className='icon' /> Salary:{salary}</p>
            <button onClick={()=>handlejobdetail(job)}>View Details</button>
                </div>
                
        </div>
        
        
    );
};

export default Job;