import React, { useState } from 'react';

const Loading = ({ animationType }) => {
    // State to trigger re-render
    const [hover, setHover] = useState(false);

    // Define the common style for all letters
    const letterStyle = {
        opacity: 0,
        animation: `${animationType} 700ms ease forwards`,
        color:'#1364FF'
    };

    // Define the individual animation delays
    const characters = ['L', 'o', 'a', 'd', 'i', 'n', 'g', '...'];

    // Calculate the animation delays
    const step = 0.4 / characters.length;
    const animationDelays = characters.reduce((acc, char, index) => {
        acc[char] = `${step * index}s`;
        return acc;
    }, {});

    return (
        <div 
            className="flex text-[240px] items-center justify-center pb-0"
            
        >
            <style>
            {`
            @keyframes popupLeave {
                100% {
                    transform: translateY(-200px);
                    opacity: 1;
                }
                0% {
                    transform: translateY(0px);
                    opacity: 1;
                }
            }

            @keyframes popup {
                0% {
                    transform: translateY(200px);
                    opacity: 0;
                }
                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            `}
        </style>
            {Object.entries(animationDelays).map(([key, delay]) => (
                <div key={key} className={`${key}`} style={{ ...letterStyle, animationDelay: delay }}>
                    {key}
                </div>
            ))}
        </div>
    );
};

export default Loading;
