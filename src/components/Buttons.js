import React from 'react';

function Button({ label, href, bgColor, bgImage, hoverBgImage, customClass }) {
    return (
        <div className={`flex-col ${customClass}`}>
            <b
                className='flex justify-center items-center block rounded-xl border-4 h-auto p-2'
                style={{ backgroundColor: bgColor }}
            >
                {label}
            </b>
            <a
                href={href}
                title={label}
                className='button block rounded-xl border-4 w-[200px] h-[170px] z-40'
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundColor: `${bgColor}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'all 0.2s ease', // Smooth shrinking
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
        <section className='buttonWrapper absolute flex flex-wrap bottom-[10%] justify-between text-4xl text-white font-semibold w-full px-16 gap-y-4 z-40'>
            <Button
                label="GitHub"
                href="https://github.com/alittlerocket"
                bgColor="#222222"
                bgImage={`${process.env.PUBLIC_URL}/assets/images/nc1.png`}
                hoverBgImage={`${process.env.PUBLIC_URL}/assets/images/nc2.png`}
                customClass="buttonLabel"
            />
            <Button
                label="Resume"
                href="https://www.linkedin.com/in/zhangm21/overlay/1710977198022/single-media-viewer/?profileId=ACoAADdirVsBt3Cp3b25yqaJuddlF9sQJYgB9qg"
                bgColor="#400000"
                bgImage={`${process.env.PUBLIC_URL}/assets/images/catread.png`}
                hoverBgImage={`${process.env.PUBLIC_URL}/assets/images/catread.png`}
                customClass="buttonLabel"
            />
            <Button
                label="Linktree"
                href="https://linktr.ee/alittlerocket"
                bgColor="#013220"
                bgImage={`${process.env.PUBLIC_URL}/assets/images/cattree.png`}
                hoverBgImage={`${process.env.PUBLIC_URL}/assets/images/cattree.png`}
                customClass="buttonLabel"
            />
        </section>
    );
}

export default GitButton;
