import React from 'react';
import SimpleTileGallery from '../tracks/simple_tile_gallery';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state
    }

    render() {
        return (
            <div className="main-body">
                <div className="panel">
                    <div className="panel-title">
                        <h2>New Music Now</h2>
                        <p>The latest hits</p>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-title">
                        <h2>Audiocloud Charts</h2>
                        <p>The most listened to tracks</p>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-title">
                        <h2>Artists you should know</h2>
                        <p>Artists you might like</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Explore;