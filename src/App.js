import React from 'react';
import Sky from './components/Sky';
import Lake from './components/Lake';
import DateTimeWrapper from './components/DateTimeWrapper';
function App() {
    return (
      <div className="relative h-screen">
        <Sky />
        <Lake />
        <DateTimeWrapper />
      </div>
    );
  }

export default App;
