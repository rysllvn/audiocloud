import React from 'react';

class WaveSeek extends React.Component {
    constructor(props) {
        super(props);
        this.wavesurfer = null;
        this.audio = document.getElementById('audio');
    }

    componentDidMount() {
        this.wavesurfer = WaveSurfer.create({
            container: '#waveform',
            barWidth: 2,
            barHeight: 1, // the height of the wave
            barGap: null // the optional spacing between bars of the wave, if not provided will be calculated in legacy format
        });
        this.wavesurfer.load(this.props.audioUrl);
        this.wavesurfer.seekTo(0);
        this.audio.addEventListener('timeupdate', () => {
            if (this.props.trackPlaying) {
                this.wavesurfer.seekTo(this.audio.currentTime / this.audio.duration);
            }
        });
    }

    componentWillUnmount() {
        this.audio.removeEventListener('timeupdate', () => {
            if (this.props.trackPlaying) {
                this.wavesurfer.seekTo(this.audio.currentTime / this.audio.duration);
            }
        });
    }

    render() {
        return (
            <div id="waveform">
            </div>
        )
    }
}

export default WaveSeek;