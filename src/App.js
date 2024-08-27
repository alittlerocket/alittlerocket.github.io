import React from 'react'
import Sky from './components/Sky';
import DateTimeWrapper from './components/DateTimeWrapper';
import Lake from './components/Lake';

function App() {
    return (
      <div className="bg-[#10101E] items-center relative h-screen flex">
        <Sky />
        <Lake />
        <DateTimeWrapper />
      </div>
    );
  }

export default App;
