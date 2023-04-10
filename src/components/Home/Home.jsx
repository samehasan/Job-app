import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className="flex-container">
           <div>
           <h1>Welcome to your <br /><span className='blue-font'>Job Career</span> </h1>
      <p>Thank you for visiting this website. <br /> Here you can find information about jobs.Explore thousands of job opportunities <br /> with all the information you need. Its your future.<br /> Come find it. Manage all your job application from start to finish.</p>
      <button>Get Started</button>
           </div>
           <div>
           <img src="https://img.freepik.com/free-photo/job-hiring-vacancy-team-interview-career-recruiting_53876-121268.jpg?size=626&ext=jpg" alt="My Photo" />
           </div>
      
        </div>
    );
};

export default Home;