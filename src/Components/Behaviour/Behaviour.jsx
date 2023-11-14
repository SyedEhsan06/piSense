import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import sdata from '../../../data.json';

ChartJS.register(ArcElement, Tooltip, Legend);

// Assuming sdata['Behavioral Analytics'] is an array of 'good' and 'bad'
const behavioralAnalyticsData = sdata['Behavioral Analytics'];

// Count occurrences of 'good' and 'bad'
const goodCount = behavioralAnalyticsData.filter((behavior) => behavior === 'good').length;
const badCount = behavioralAnalyticsData.filter((behavior) => behavior === 'bad').length;

export const data = {
  labels: ['Good', 'Bad'],
  datasets: [
    {
      label: '',
      data: [goodCount, badCount],
      backgroundColor: [
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 99, 132, 0.5)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Behaviour = () => {
  return (
 <div className="main w-full h-full flex justify-center">
       
   <div className='bg-slate-200 w-[40vw] justify-center items-center flex h-[40vh]'>
     <div className="chart-container" style={{ width: '200px', height: '200px' }}>
      <Pie data={data} />
    </div>
   </div>
 </div>
  );
};

export default Behaviour;
