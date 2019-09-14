import React from 'react';

class PlayControls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTrackId: 0
        }
    }

    render () {
        return (
            <section className="play-controls">
                <audio controls />
            </section>
        )
    }
}

export default PlayControls;