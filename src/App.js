import React from 'react'
import Sky from './components/Sky';
import DateTimeWrapper from './components/DateTimeWrapper';
import Lake from './components/Lake';
import GitButton from './components/Buttons';

function App() {
    return (
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <Sky />
        <Lake />
        <DateTimeWrapper />
        <GitButton />
      </div>
    );
  }

export default App;
