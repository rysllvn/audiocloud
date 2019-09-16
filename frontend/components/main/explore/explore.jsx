import React from 'react';

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
                        <p>load last 4 here</p>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-title">
                        <h2>Audiocloud Charts</h2>
                        <p>most comments here</p>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-title">
                        <h2>Artists you should know</h2>
                        <p>random list of artists/songs</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Explore;