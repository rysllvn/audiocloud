import React from 'react';

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
        document.addEventListener('mouseup', () => {
            console.log('stop drag');
            document.removeEventListener('mousemove', drag);
        });
    }

    return (
        <div
            id="bar-progress"
            className="bar-progress"
            onClick={handleClick}
            style={{
                background: `linear-gradient(to right, #f50 ${(curTime / max) * 100}%, white 0`
            }}
        >
            <span
                onMouseDown={handleDrag}
                className="bar-progress-knob"
                style={{ left: `${(curTime / max) * 100 - 2}%` }}
            />
        </div>
    )
}

export default ProgressBar;