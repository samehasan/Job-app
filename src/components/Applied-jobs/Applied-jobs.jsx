import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Appliedjobs = () => {
   
    const {cartArray}=useLoaderData()
    
   
    return (
        <div className='flex'>
           <h1>Applied Jobs :{cartArray.length}</h1>
           <ul>
            {cartArray.map(job=>(
                <CartItem key={job.id} job={job}/>
            ))}
           </ul>
        </div>
    );
};

export default Appliedjobs;