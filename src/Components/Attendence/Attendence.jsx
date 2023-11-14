import React from 'react';

const Attendance = ({ data }) => {
  console.log(data);

  if (!data || !data.ATTENDANCE) {
    return <div>No attendance data available</div>;
  }

  return (
   <div className='w-full h-full flex justify-center items-center'>
     <div className="flex flex-wrap  mt-4 bg-slate-300 w-[70vw] h-[50vh]  gap-20">
       <div className="flex flex-col justify-center gap-16 ml-2 mt-20">
         <h4 className="text-sm font-semibold">FN:</h4>
        <h4 className="text-sm font-semibold">AN:</h4>
       </div>
      {Object.keys(data.ATTENDANCE).map((day) => (
        <div key={day} className="flex justify-center">
          <div className="flex flex-col gap-10 ">   
          <h3 className="text-lg font-semibold">{day}</h3>  
          <h3>{data.ATTENDANCE[day].date}</h3>
            <div className="mr-4">
              {data.ATTENDANCE[day].fn === 'present' ? (
                  <div className="bg-green-500 text-white p-2 rounded-md">
                  Present
                </div>
              ) : (
                <div className="bg-red-500 text-white p-2 rounded-md">
                  Absent
                </div>
              )}    
            </div>
            <div>
             
              {data.ATTENDANCE[day].an === 'present' ? (
                <div className="bg-green-500 text-white p-2 rounded-md">
                  Present
                </div>
              ) : (
                <div className="bg-red-500 text-white p-2 rounded-md">
                  Absent
                </div>
              )}
            </div>
          </div>
        </div>
        
      ))}
    </div>
   </div>
  );
};

export default Attendance;
