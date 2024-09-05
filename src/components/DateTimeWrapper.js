import React from 'react';

function DateTimeWrapper() {
  return (
    <section className="datetime-wrapper absolute inset-0 flex flex-col justify-center items-center">
      <div className="datetime relative text-white bg-[#10101E] font-sans w-auto pt-5 pb-5 pr-3.5 pl-3.5 text-center rounded animate-wave">
        <div className="date text-xl font-semibold tracking-[0.188em]">
          <span id="nameDay">Day</span>,&nbsp;
          <span id="month">Month</span>&nbsp;
          <span id="numDay">00</span>,&nbsp;
          <span id="year">Year</span>
        </div>
        <div className="time text-6xl font-bold flex justify-center items-center">
          <span id="hour">00</span>:
          <span id="minutes">00</span>:
          <span id="seconds">00</span> 
          <span id="period">AM</span>
        </div>
      </div>
    </section>
  );
}

export default DateTimeWrapper;
