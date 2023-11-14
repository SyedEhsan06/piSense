import React from 'react';
import Attendance from '../Attendence/Attendence';
import Academic from '../Academic/Academic';
import Behaviour from '../Behaviour/Behaviour';

const Mainboard = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="top mt-[-15px] ">
        <Attendance data={data} />
      </div>
      <div className="bottom flex flex-row ">
        <div className="a w-full">
        <Academic data={data} />
        </div>
        <div className="b">
        <Behaviour data={data} />
        </div>
      </div>
    </div>
  );
};

export default Mainboard;
