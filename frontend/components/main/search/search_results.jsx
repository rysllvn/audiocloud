import React from 'react';
import PanelContainer from '../tracks/panel_container';
import { Link } from 'react-router-dom';

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
                <h2>Artists</h2>
                <ul>
                    {this.props.results.users.map(user => {
                        let profilePic;
                        if (user.imageUrl) {
                            profilePic = <div className="mini-user-container">
                                            <img className="mini-pic" src={user.imageUrl}/>
                                         </div>;
                        } else {
                            profilePic = <div className="mini-user-container">
                                            <img 
                                                className="mini-pic"
                                                src={window.defaultUserImage}
                                            />
                                         </div>;
                        }



                        return (
                            <li className="profile-banner" key={`u${user.id}`}>
                                {profilePic}
                                <Link className="user-panel-link" to={`/users/${user.id}`}>{user.username}</Link>
                            </li>
                        )
                    })}
                </ul>
                <h2>Tracks</h2>
                <ul>
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