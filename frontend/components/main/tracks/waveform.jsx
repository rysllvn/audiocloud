import React from 'react';

class WaveSeek extends React.Component {
    constructor(props) {
        super(props);
        this.wavesurfer = null;
    }

    componentDidMount() {
        this.wavesurfer = WaveSurfer.create({
            container: '#waveform'
        });
        this.wavesurfer.load(this.props.audioUrl);
    }

    render() {
        return (
            <div id="waveform">

            </div>
        )
    }
}

export default WaveSeek;