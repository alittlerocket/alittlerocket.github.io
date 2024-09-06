import React, { useEffect, useState } from 'react';

const IntroDialogue = () => {
    const [visitCount, setVisitCount] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [key, setKey] = useState(0);

    const messages = [
        "Welcome to the page for the first time!",
        "Click the button to see the next message.",
        "Thanks for sticking around!",
        "This is the final message in the sequence."
    ];

    useEffect(() => {
        // Get the current number of visits from localStorage
        let visits = parseInt(localStorage.getItem('visitCount') || '0', 10);

        // Increment the visit count
        setVisitCount(++visits);

        // Store the updated visit count in localStorage
        localStorage.setItem('visitCount', visits);
    }, []);

    const handleNextMessage = () => {
        if (messageIndex < messages.length - 1) {
            setMessageIndex(messageIndex + 1);
            setKey(prevKey => prevKey + 1);
        }
    };
    
    return (
        <div className="absolute top-[25%] inline-block z-40">
            <p key={key} className="welcome-text font-mono text-4xl whitespace-nowrap overflow-hidden w-full">{messages[messageIndex]}</p>
        
            {messageIndex < messages.length - 1 && (
                <button 
                    className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                    onClick={handleNextMessage}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default IntroDialogue;
