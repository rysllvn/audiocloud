import React from 'react';

const volumeUp = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>;

const volumeDown = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>;

const volumeZero = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 9v6h4l5 5V4l-5 5H7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>;

const volumeOff = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>;

export default function Volume() {
    const audio = document.getElementById('audio');
    let volumeButton;
    if (audio.muted) {
        volumeButton = volumeOff;
    } else {
        if (audio.volume === 0) {
            volumeButton = volumeZero;
        }
        else if (audio.volume > .5) {
            volumeButton = volumeUp;
        } else {
            volumeButton = volumeDown;
        }
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

    function toggleMute(e) {
        audio.muted = !audio.muted;
    }

    return (        
        <div className='volume'>
            <div 
                className="volume-button"
                onClick={toggleMute}    
            >
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