import React from 'react';

const Academic = ({ data }) => {
  return (
    <div className="w-60vw h-full justify-center flex ">
      <div className="container flex flex-col bg-slate-400 w-1/2 h-[40vh]">
        <h2 className="text-xl font-semibold mb-4 justify-center flex">Homeworks</h2>
        <div>
          {data.homework.map((subject, index) => (
            <div  key={index} className="text-gray-800 flex flex-row">
              <div className='bg-white m-2 p-2'>{subject}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic;
