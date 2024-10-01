import React, { useEffect, useState } from 'react';
import { getMessage, getDefaultMessages } from './utils/helpers/getMessage';  // Adjust the path to where your getMessage function is located

const IntroDialogue = () => {
    const [visitCount, setVisitCount] = useState(0);
    const [message, setMessage] = useState([]);
    const [messageIndex, setMessageIndex] = useState(0);
    const [key, setKey] = useState(0);

    useEffect(() => {
        const lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');
        const currTimestamp = Date.now()
        let visits = parseInt(localStorage.getItem('visitCount') || '0', 10);

        if ((!lastVisitTimestamp || currTimestamp - lastVisitTimestamp > 12*3600*1000))
        {
            localStorage.setItem('lastVisitTimestamp', currTimestamp);
            setVisitCount(++visits);
            localStorage.setItem('visitCount', visits);
            setMessage(getMessage(visits));
        } else {
            setMessage(getDefaultMessages())
        }

        
    }, []);

    const handleNextMessage = () => {
        if (messageIndex < message.length - 1) {
            setMessageIndex(messageIndex + 1);
            setKey(prevKey => prevKey + 1);  // Force re-render to replay animation
        }
    };
    
    return (
        <div className="absolute top-[15%] inline-block z-40">
            <p key={key} className="welcome-text font-mono text-2xl whitespace-nowrap overflow-hidden w-full">
                {message[messageIndex]}
            </p>
        
            {messageIndex < message.length - 1 && (
                <button 
                    className="next-button text-xl px-4 py-2 font-bold rounded"
                    onClick={handleNextMessage}
                >
                    =={'>'}
                </button>
            )}
        </div>
    );
};

export default IntroDialogue;
