import React from 'react';

class PlayControls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTrack: props.trackId,
            srcUrl: null,
            tracks: props.tracks
        };
    }    

    render () {
        return (
            <section className="play-controls">
                    <audio controls/>
            </section>
        )
    }
}

export default PlayControls;