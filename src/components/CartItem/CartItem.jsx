import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import './CartItem.css'

const CartItem = ({job}) => {
    const { jobTitle,companyLogo, jobType, salary,time,location } = job
    return (
        <div className='crt-container'>
            <div><img src={companyLogo} alt="" /></div>
        <div className='job-container'>
            
            <h1>{jobTitle}</h1>
            <p>{jobType} | {time}</p>
            <p><MapPinIcon className='icon' />Location:{location} | <CurrencyDollarIcon className='icon' /> Salary:{salary}</p>
            
           </div>
           <div>
            <Link to={`../job/${job.id}`}> <div>
                  <button >Job Details</button>
                  </div></Link>
            </div>
        </div>
    );
};

export default CartItem;