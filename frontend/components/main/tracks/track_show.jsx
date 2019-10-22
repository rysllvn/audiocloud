import React from 'react';
import PanelContainer from './panel_container';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        }
        this.updateBody = this.updateBody.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }
    componentDidMount() {
        this.props.getTrack(this.props.match.params.trackId);
    }

    componentWillUnmount() {
        this.props.clearComments();
    }

    handleComment(e) {
        e.preventDefault();
        const comment = {
            track_id: this.props.track.id,
            body: this.state.body,
        };
        this.props.createComment({comment})
            .then(() => this.setState({ body: ''}));
    }

    updateBody(e) {
        this.setState({
            body: e.currentTarget.value,
        });
    }

    render() {
        if (!this.props.track) {
            return (
                <h1>Loading Yo</h1>
            )
        }
        
        return (
            <div>
                <h1>{this.props.track.title}</h1>
                <PanelContainer track={this.props.track} />
                <ul>
                    {Object.values(this.props.comments).map(comment => {
                        return (
                            <li>
                                {comment.body}
                            </li>
                        )
                    })}
                </ul>
                <form
                    onSubmit={this.handleComment}
                >
                    <label>
                        <input
                            type="text"
                            onChange={this.updateBody}
                            placeholder="Leave a comment"
                        />
                    </label>
                    <input type="submit" value="Comment"/>
                </form>
            </div>
        )
    }
}

export default TrackShow;