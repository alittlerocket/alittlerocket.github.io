import React from 'react';

function DateTimeWrapper() {
  return (
    <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 p-4 text-white rounded-md">
      <div className="date text-center">
        <span id="nameDay">Day</span>, <span id="month">Month</span> <span id="numDay">00</span>, <span id="year">Year</span>
      </div>
      <div className="time text-center text-lg font-bold">
        <span id="hour">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span> <span id="period">AM</span>
      </div>
    </div>
  );
}

export default DateTimeWrapper;
