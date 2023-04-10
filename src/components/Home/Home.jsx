import React, { useState, useEffect } from 'react';
import './Home.css';
import jclData from './../../../public/jcl.json';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jclData);
  }, []);

  return (
    <div>
      <div className="flex-container">
        <div>
          <h1>
            Welcome to your <br />
            <span className='blue-font'>Job Career</span>
          </h1>
          <p>
            Thank you for visiting this website. <br /> Here you can find
            information about jobs.Explore thousands of job opportunities <br />
            with all the information you need. Its your future.<br /> Come find
            it. Manage all your job application from start to finish.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/job-hiring-vacancy-team-interview-career-recruiting_53876-121268.jpg?size=626&ext=jpg"
            alt="My Photo"
          />
        </div>
      </div>
      <div className='JCL'>
        <h1>Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className='job-info'>
        {jobs.map((job) => (
          <div  key={job.jobTitle}>
            <img src={job.image} alt="" />
            <h2>{job.jobTitle}</h2>
           
            <p>{job.availableSeats} jobs available</p>
          </div>
        ))}
        </div>
       
      </div>
    </div>
  );
};

export default Home;
