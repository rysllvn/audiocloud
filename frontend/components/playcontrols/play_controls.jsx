import React from 'react';

class PlayControls extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        console.log(this.props.currentTrack);
        let src;
        if (this.props.currentTrack) {
            src = this.props.tracks[this.props.currentTrack].audioUrl;
        }
        return (
            <section className="play-controls">
                    <audio src={src} controls autoplay />
            </section>
        )
    }
}

export default PlayControls;