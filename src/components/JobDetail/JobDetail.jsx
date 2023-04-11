import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetail.css';
import {PhoneIcon,CurrencyDollarIcon,IdentificationIcon,NewspaperIcon, MapIcon } from '@heroicons/react/24/solid'
const JobDetail = () => {
  const { id } = useParams();
  const jobs = useLoaderData(data => data);

  useEffect(() => {
    if (jobs) {
      const job = jobs.find(job => job.id == id);
      console.log(job);
    }
  }, [jobs, id]);

  if (!jobs) {
    return <div>Loading...</div>;
  }

  const { jobTitle, description,responsibilities,requirements,experience,Email,Address,Phone, location, salary } = jobs.find(job => job.id == id);

  return (
    
    <div className='job-conta'>
        
<div className='job-conta1'>
    <p><span className='bigfont'>Job Description:</span> {description}</p>
    <p><span className='bigfont'>Job Responsibility:</span> {responsibilities}</p>
    <p><span className='bigfont'>Job Requirement:</span>{requirements}</p>
    <p><span className='bigfont'>Job Experience:</span>{experience}</p>
</div>
      <div className='job-conta1'>
       <h1>Job Details</h1>
        <h3><IdentificationIcon className='icon' />Job Title:{jobTitle}</h3>
        <p><CurrencyDollarIcon className='icon' /> Salary:{salary}</p>
        <h2>Contact Info</h2>
        <p><PhoneIcon className='icon' />Phone:{Phone}</p>
        <p><NewspaperIcon className='icon' />Email:{Email} </p>
        <p><MapIcon className='icon' />Address:{Address}</p>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetail;
