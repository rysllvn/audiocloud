import React from 'react';

class PlayControls extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentTrack !== prevProps.currentTrack) document.getElementById("audio").play();
        if (this.props.playing) {
            document.getElementById("audio").play();
        } else {
            document.getElementById("audio").pause();
        }
    }

    render () {
        let src;
        if (this.props.currentTrack) src = this.props.tracks[this.props.currentTrack].audioUrl;
        return (
            <section className="play-controls">
                <button className="toggle" onClick={() => this.props.togglePlay() }>Toggle</button>
                <audio id="audio" src={src} />
            </section>
        )
    }
}

export default PlayControls;