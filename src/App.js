import React from 'react'
import Sky from './components/Sky';
import DateTimeWrapper from './components/DateTimeWrapper';
import Lake from './components/Lake';
import IntroDialogue from './components/IntroDialogue'
import GitButton from './components/Buttons';

function App() {
    return (
      <div className="main-container relative flex items-center justify-center h-screen overflow-hidden">
        <Sky />
        <Lake />
        <DateTimeWrapper />
        <GitButton />
        <IntroDialogue />
      </div>
    );
  }

export default App;
