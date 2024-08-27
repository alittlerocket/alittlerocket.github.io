import React from 'react';
import Sky from './components/Sky';
import DateTimeWrapper from './components/DateTimeWrapper';
import Lake from './components/Lake';

function App() {
    return (
      <div className="relative h-screen margin-0">
        <Sky />
        <Lake />
        <DateTimeWrapper />
      </div>
    );
  }

export default App;
