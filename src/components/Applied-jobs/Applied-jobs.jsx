import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Applied-jobs.css'

const Appliedjobs = () => {
  const { cartArray } = useLoaderData();
  const [selectedJobType, setSelectedJobType] = useState('all');

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  const filteredJobs = selectedJobType === 'all'
    ? cartArray
    : cartArray.filter(job => job.jobType === selectedJobType);

  return (
    <div >
      <h1>Applied Jobs: {cartArray.length}</h1>
      <div className='filtering'>
        <select value={selectedJobType} onChange={handleJobTypeChange} className="job-type-select">
          <option value="all">All</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
      {filteredJobs.map(job => (
        <CartItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Appliedjobs;
