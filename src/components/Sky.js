import React from 'react';

function Sky() {
  return (
    <section className="sky absolute h-screen w-screen">
        <div className="clouds absolute h-2/5 w-full bg-repeat-x bg-cover bg-cloud-image animate-moveCloud top-0 z-10" />
        <div className="sun absolute w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg" 
            style={{ 
                top: '20%', 
                left: '50%', 
                transform: 'translateX(-50%)',
                boxShadow: '0 0 80px rgba(255, 200, 0, 1), 0 0 150px rgba(255, 165, 0, 0.9)',
            }}>
            
        </div>
        <div className="moon absolute w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg opacity-0" 
            style={{ 
                top: '20%', 
                left: '50%', 
                transform: 'translateX(-50%)',
                boxShadow: '0 0 80px rgba(255, 255, 255, 1), 0 0 150px rgba(255, 255, 255, 0.9)',
            }}>
        </div>
        <div className="stars absolute h-screen w-screen">
            <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '20%', left: '30%' }}></div>
            <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '40%', left: '50%' }}></div>
            <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '10%', left: '70%' }}></div>
            <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '25%', left: '50%' }}></div>
            <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '15%', left: '35%' }}></div>
            <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '30%', left: '80%' }}></div>
            <div className="star w-1 h-1 bg-white rounded-full shadow-sm absolute" style={{ top: '35%', left: '85%' }}></div>
        </div>
    </section>
  );
}

export default Sky;
