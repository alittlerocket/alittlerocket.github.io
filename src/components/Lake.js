import React from 'react';

function Lake() {
  return (
    <section 
      className="lake absolute blur-sm rounded animate-waveTransform z-10"
      style={{
        width: '105%',
        bottom: '-30px',
        height: 'calc(60% + 30px)',
        backgroundImage: 'url(/assets/gifs/lake.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    </section>
  );
}

export default Lake;
