import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            results: {},
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type, id) {
        if (type === 'search') {
            this.props.history.push({pathname: `/search/${this.state.searchTerm}`})
        } else {
            this.props.history.push({pathname: `/${type}/${id}`});
        }
        this.setState({results: {}, searchTerm: ''});
    }

    componentDidUpdate(prevProps) {
        if (this.props.match !== prevProps.match) {
            this.setState({results: {}, searchTerm: ''});
        }
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({searchTerm: e.target.value}, () => {
            if(this.state.searchTerm.length > 1) {
                $.ajax({
                    method: 'GET',
                    url: '/api/searches',
                    data: {query: this.state.searchTerm}
                })
                .then(results => {
                    if (results.users || results.tracks) {
                        this.setState({results: results});
                    } else {
                        this.setState({results: {empty: 'No results found'}});
                    }
                })
            } else {
                this.setState({results: {}});
            }
        })
        console.log(this.state.results)
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`search-${this.props.container}`}>
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
                    {this.state.searchTerm && 
                        <li
                            onClick={() => this.handleClick('search')}
                            className='search-term-item'
                        >Search for {this.state.searchTerm}</li>}
                    {this.state.results.users && Object.values(this.state.results.users).map(user => {
                        return (
                            <li onClick={() => this.handleClick('users', user.id)}
                                className="search-preview-item" key={`u${user.id}`}>
                                user - {user.username}
                            </li>
                        )
                    })}
                    {this.state.results.tracks && Object.values(this.state.results.tracks).map(track => {
                        return (
                            <li onClick={() => this.handleClick('tracks', track.id)}
                                className="search-preview-item" key={`t${track.id}`}>
                                track - {track.title}
                            </li>
                        )
                    })}
                    {this.state.results.empty && 
                        <li className="search-preview-empty">{this.state.results.empty}</li>}
                </ul>
            </div>
        )
    }
}

export default SearchBar;