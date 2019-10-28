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
        this.deleteComment = this.deleteComment.bind(this);
        this.deleteTrack = this.deleteTrack.bind(this);
    }
    componentDidMount() {
        this.props.getTrack(this.props.match.params.trackId)
            .fail(() => {
                this.props.history.push('/ohno');
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
            this.props.getTrack(this.props.match.params.trackId)
                .fail(() => {
                    this.props.history.push('/ohno');
                });
        }
    }

    componentWillUnmount() {
        this.props.clearComments();
    }

    deleteComment(e, comment) {
        e.preventDefault()
        this.props.deleteComment(comment.id);
    }

    deleteTrack(e) {
        e.preventDefault();
        this.props.deleteTrack(this.props.match.params.trackId);
        this.props.history.push({pathname: `/users/${this.props.currentUserId}`});
    }

    handleComment(e) {
        e.preventDefault();
        if (this.props.currentUserId) {
            const comment = {
                track_id: this.props.track.id,
                body: this.state.body,
            };
            this.props.createComment({comment})
                .then(() => this.setState({ body: ''}));
        } else {
            this.props.setModalStatus('signIn');
        }
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
                {this.props.currentUserId === this.props.track.user_id && <button onClick={this.deleteTrack}>Delete Track</button>}
                <ul>
                    {Object.values(this.props.comments).map(comment => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.body}</p>
                                <p>{this.props.users[comment.user_id].username}</p>
                                <p>{comment.created_at}</p>
                                {this.props.currentUserId === comment.user_id && <button onClick={(e) => this.deleteComment(e,comment)}>Delete</button>}
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
                            value={this.state.body}
                        />
                    </label>
                    <input type="submit" value="Comment"/>
                </form>
            </div>
        )
    }
}

export default TrackShow;