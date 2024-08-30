import React from 'react';

function GitButton() {
    return (
        <div className='absolute flex-col text-center text-4xl text-white font-semibold left-[10%] bottom-[15%]'>
            <a className='block rounded-xl border-4 bg-[#222222] h-auto p-2'>GitHub</a>
            <a 
                href="https://github.com/alittlerocket" 
                title="projects" 
                className="block rounded-xl border-4 bg-[#222222] bg-nc1 bg-cover w-[300px] h-[210px] z-40"
                onMouseEnter={e => {
                    e.currentTarget.style.backgroundImage = "url('/assets/images/nc2.png')";
                    e.currentTarget.style.borderColor = 'black'; 
                    e.currentTarget.style.backgroundColor = 'lightgrey'; 
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundImage = "url('/assets/images/nc1.png')";
                    e.currentTarget.style.borderColor = 'white';
                    e.currentTarget.style.backgroundColor = '#222222';
                }}
            >
            </a>
        </div>
    );
}

export default GitButton;
