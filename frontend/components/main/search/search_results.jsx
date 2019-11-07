import React from 'react';
import PanelContainer from '../tracks/panel_container'

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        this.props.search({query: this.props.match.params.query})
    }

    render() {
        return (
            <div>
                <h1>Results for '{this.props.match.params.query}'</h1>
                <ul>
                    {this.props.results.users.map(user => {
                        return (
                            <li key={`u${user.id}`}>
                                {user.username}
                            </li>
                        )
                    })}
                    {this.props.results.tracks.map(track => {
                        return (                            
                                <PanelContainer key={track.id} track={track}/>                           
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchResults;