import React from 'react';

const formatTime = time => {
    if (Number.isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    if (seconds < 10) {
        return minutes + ':0' + seconds;
    } else {
        return minutes + ':' + seconds;
    }
}

function ProgressBar({curTime, max}) {
    function handleClick(e) {
        const bar = document.getElementById('bar-progress');
        const start = bar.getBoundingClientRect().x;
        const pos = e.clientX - start;
        const percent = pos / bar.getBoundingClientRect().width;
        const audio = document.getElementById('audio');
        audio.currentTime = percent * max;
    };

    function drag(e) {
        const bar = document.getElementById('bar-progress');
        const start = bar.getBoundingClientRect().x;
        const pos = e.clientX - start;
        const percent = pos / bar.getBoundingClientRect().width;
        const audio = document.getElementById('audio');
        audio.currentTime = percent * max;
    }

    function handleDrag(e) {
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', () => document.removeEventListener('mousemove', drag));
    }

    return (
        <div
            className="timeline"
        >
            <p id="start-time">{formatTime(curTime)}</p>
            <div
                id="bar-progress"
                className="bar-progress"
                onClick={handleClick}
            >
                <div
                    className="bar-line"
                    style={{
                        background: `linear-gradient(to right, #f50 ${(curTime / max) * 100}%, #ccc 0`,
                        height: '1px',
                    }}
                />
                <span
                    onMouseDown={handleDrag}
                    className="bar-progress-knob"
                    style={{ left: `${(curTime / max) * 100}%` }}
                />
            </div>
            <p id="duration">{formatTime(max)}</p>
        </div>
    )
}

export default ProgressBar;