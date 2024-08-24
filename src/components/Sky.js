import React from 'react';

function Sky() {
  return (
    <div className="relative h-2/5 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="sun absolute w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }}></div>
      <div className="moon absolute w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg opacity-0" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }}></div>
      <div className="stars absolute">
        <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '20%', left: '30%' }}></div>
        <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '40%', left: '50%' }}></div>
        <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '10%', left: '70%' }}></div>
        <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '25%', left: '50%' }}></div>
        <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '15%', left: '35%' }}></div>
        <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '30%', left: '80%' }}></div>
        <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '35%', left: '85%' }}></div>
      </div>
      <div className="clouds absolute w-3/5 h-auto bg-repeat-x" style={{ top: '10%', left: '20%' }}>
        <img src="../images/cloud.png"></img>
      </div>
    </div>
  );
}

export default Sky;
