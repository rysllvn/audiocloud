import React from 'react';

export default function Volume() {
    const audio = document.getElementById('audio');

    function handleClick(e) {
        const volumeBar = document.getElementById('volume-indication');
        const end = volumeBar.getBoundingClientRect().y;
        const start = end + volumeBar.getBoundingClientRect().height;
        const pos = start - e.clientY;
        const volume = pos / volumeBar.getBoundingClientRect().height;
        audio.volume = volume;
    }
    
    return (
        <div className='volume-box'>
            <div 
                id='volume-bar-wrapper'
                className='volume-bar-wrapper'
            >
                <div
                    id='volume-indication'
                    onClick={handleClick}
                    className='volume-indication'
                    style={{
                        position: 'absolute',
                        bottom: '5px',
                        left: '14px',
                        background: `linear-gradient(0deg, #f50 ${audio.volume * 100}%, #ccc 0`,
                        height: '50px',
                        width: '2px',
                    }}
                />
            </div>
        </div>
    )
}