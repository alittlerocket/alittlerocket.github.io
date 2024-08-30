import React from 'react';

function Lake() {
  return (
    <div 
        className="lake absolute bg-gradient-to-t from-blue-800 to-blue-600 blur-sm rounded animate-waveTransform"
        style={{ width: '105%' , bottom: '-30px', height: 'calc(60% + 30px)' }}
    >
    </div>
  );
}

export default Lake;
