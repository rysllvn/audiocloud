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

    return (
        <div
            id="bar-progress"
            className="bar-progress"
            onClick={handleClick}
            style={{
                background: `linear-gradient(to right, orange ${(curTime / max) * 100}%, white 0`
            }}
        >
            <span
                className="bar-progress-knob"
                style={{ left: `${(curTime / max) * 100 - 2}%` }}
            />
        </div>
    )
}

export default ProgressBar;