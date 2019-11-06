import React from 'react';

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
                <h1>Search Results here</h1>
                <ul>

                </ul>
            </div>
        )
    }
}

export default SearchResults;