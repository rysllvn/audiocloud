import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            users: [],
            tracks: []
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({searchTerm: e.target.value}, () => {
            if (this.state.searchTerm.length > 2) {
                $.ajax({
                    method: 'GET',
                    url: '/api/searches',
                    data: {query: this.state.searchTerm}
                })
                .then(results => {
                    if (Object.values(results.users).length !== 0) {
                        this.setState({users: Object.values(results.users)});
                    } else {
                        this.setState({user: []});
                    }

                    if (Object.values(results.tracks).length !== 0) {
                        this.setState({tracks: Object.values(results.tracks)});
                    } else {
                        this.setState({tracks: []});
                    }
                })
            }
        })
        console.log(this.state.results)
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleInput}
                        className="search-input"
                        type="search"
                        placeholder="Search"
                        value={this.state.searchTerm}
                    />
                </form>
                <ul className='search-preview-list'>
                    {this.state.users.map(user => {
                        return (
                            <li className="search-preview-item">
                                {user.username}
                            </li>
                        )
                    })}
                    {this.state.tracks.map(track => {
                        return (
                            <li className="search-preview-item">
                                {track.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchBar;