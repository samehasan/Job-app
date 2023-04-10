import React from 'react';

const Job = ({job}) => {
    const {jobTitle,companyLogo,jobType,time,location,salary}=job;
    return (
        <div>
            <img src={companyLogo} alt="" />
            <h1>{jobTitle}</h1>
        </div>
    );
};

export default Job;