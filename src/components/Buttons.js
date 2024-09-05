import React from 'react';

function Button({ label, href, bgColor, bgImage, hoverBgImage }) {
    return (
        <div className='flex-col'>
            <b 
                className='flex justify-center items-center block rounded-xl border-4 h-auto p-2'
                style={{ backgroundColor: bgColor }}
            >
                {label}
            </b>
            <a 
                href={href} 
                title={label} 
                className='block rounded-xl border-4 w-[235px] h-[200px] z-40'
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundColor: bgColor,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.backgroundImage = `url(${hoverBgImage})`;
                    e.currentTarget.style.borderColor = 'black'; 
                    e.currentTarget.style.backgroundColor = 'lightgrey'; 
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundImage = `url(${bgImage})`;
                    e.currentTarget.style.borderColor = 'white';
                    e.currentTarget.style.backgroundColor = bgColor; 
                }}
            >
            </a>
        </div>
    );
}


function GitButton() {
    return (
        <section className='absolute flex flex-wrap justify-between text-4xl text-white font-semibold bottom-[10%] w-full px-16'>
            <Button 
                label="GitHub" 
                href="https://github.com/alittlerocket" 
                bgColor="#222222" 
                bgImage="/assets/images/nc1.png" 
                hoverBgImage="/assets/images/nc2.png" 
            />
            <Button 
                label="Resume" 
                href="https://github.com/alittlerocket" 
                bgColor="#400000" 
                bgImage="/assets/images/catread.png" 
                hoverBgImage="/assets/images/catread.png" 
            />
            <Button
                label="Linktree"
                href="https://linktr.ee/alittlerocket"
                bgColor="#013220"
                bgImage="/assets/images/cattree.png"
                hoverBgImage="/assets/images/cattree.png"
            />
        </section>
    );
}

export default GitButton;
