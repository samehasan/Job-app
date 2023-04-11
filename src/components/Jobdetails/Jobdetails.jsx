import React from 'react';
import jobsData from '../jobs.json';

function JobDetails({ match }) {
  const jobId = match.params.id;
  const job = jobsData.find(job => job.id === jobId);

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
    </div>
  );
}

export default JobDetails;
