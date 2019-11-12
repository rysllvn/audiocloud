import React from 'react';
const volumeUp = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>;
const volumeDown = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>;

export default function Volume() {
    const audio = document.getElementById('audio');
    let volumeButton;
    if (audio.volume > .5) {
        volumeButton = volumeUp;
    } else {
        volumeButton = volumeDown;
    }

    function handleClick(e) {
        const volumeBar = document.getElementById('volume-bar-wrapper');
        const end = volumeBar.getBoundingClientRect().y;
        const start = end + volumeBar.getBoundingClientRect().height;
        const pos = start - e.clientY;
        const volume = pos / volumeBar.getBoundingClientRect().height;
        audio.volume = volume;
    }

    function drag(e) {
        const volumeBar = document.getElementById('volume-bar-wrapper');
        const end = volumeBar.getBoundingClientRect().y;
        const start = end + volumeBar.getBoundingClientRect().height;
        const pos = start - e.clientY;
        let volume = pos / volumeBar.getBoundingClientRect().height;
        volume > 1.0 ? volume = 1.0 : volume < 0 ? volume = 0 : volume = volume;
        audio.volume = volume;
    }
    
    function handleDrag(e) {
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', () => document.removeEventListener('mousemove', drag));
    }

    return (        
        <div className='volume'>
            <div className="volume-button">
                {volumeButton}
            </div>
            <div className='volume-box'>
                <div 
                    id='volume-bar-wrapper'
                    className='volume-bar-wrapper'
                    onClick={handleClick}
                >
                    <div
                        id='volume-indication'                    
                        className='volume-indication'
                        style={{
                            position: 'absolute',
                            background: `linear-gradient(0deg, #f50 ${audio.volume * 100}%, #ccc 0`,
                            height: '100px',
                            width: '2px',
                        }}
                    />
                    <span
                        onMouseDown={handleDrag}
                        className="volume-knob"
                        style={{
                            position: 'absolute',
                            bottom: `${audio.volume * 100}%`,
                        }}
                    />
                </div>
            </div>
        </div>
        
    )
}