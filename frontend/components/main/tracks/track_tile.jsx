import React from 'react';

class TrackTile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        <div>
            <h3>Track Tile{this.props.track.title}</h3>
        </div>
    }
}

export default TrackTile;