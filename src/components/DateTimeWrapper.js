import React from 'react';

function DateTimeWrapper() {
  return (
    <div className="datetime-wrapper absolute inset-0 flex flex-col justify-center items-center z-40">
      <div className="color-white bg-[#10101E] font-sans w-[340px] pt-4 pb-2.5 text-center rounded">
        <div className="date text-center">
          <span id="nameDay">Day</span>, 
          <span id="month">Month</span> 
          <span id="numDay">00</span>, 
          <span id="year">Year</span>
        </div>
        <div className="time text-center text-lg font-bold">
          <span id="hour">00</span>:
          <span id="minutes">00</span>:
          <span id="seconds">00</span> 
          <span id="period">AM</span>
        </div>
      </div>
    </div>
  );
}

export default DateTimeWrapper;
