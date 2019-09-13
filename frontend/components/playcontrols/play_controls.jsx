import React from 'react';

class PlayControls extends React.Component {
    constructor(props) {
        super(props)
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