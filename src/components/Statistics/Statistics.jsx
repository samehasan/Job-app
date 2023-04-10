import React from 'react';
import { LineChart,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const marksArray = [
        {
            title: "Assignment 1",
            marks: 60
          },
          {
            title: "Assignment 2",
            marks: 59
          },
          {
            title: "Assignment 3",
            marks: 58
          },
          {
            title: "Assignment 4",
            marks: 56
          },
          {
            title: "Assignment 5",
            marks: 52
          },
          {
            title: "Assignment 6",
            marks: 60
          },
          {
            title: "Assignment 7",
            marks: 58
          }
      ];
    return (
        <div>
            <h1>Statistical Representation</h1>
            <h2>Area Chart of my Marks in Asignments</h2>
       <AreaChart
         width={1200}
         height={400}
         data={marksArray}
       > <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="title" />
       <YAxis />
       <Tooltip />
       <Area type="monotone" dataKey="marks" stroke="#82ca9d" fill="#82ca9d" />
     
       </AreaChart>
    </div>
    );
};

export default Statistics;