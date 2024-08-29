import React from 'react'
import Sky from './components/Sky';
import DateTimeWrapper from './components/DateTimeWrapper';
import Lake from './components/Lake';
import Overlay from './components/Overlay';

function App() {
    return (
      <div className="items-center justify-center relative h-screen flex">
        <Sky />
        <Lake />
        <Overlay />
        <DateTimeWrapper />
      </div>
    );
  }

export default App;
