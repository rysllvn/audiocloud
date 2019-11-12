import React from 'react';
import PanelContainer from './panel_container';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        };
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
        const result = confirm('This will delete the track (cannot be undone)');
        if (result)  {
            this.props.deleteTrack(this.props.match.params.trackId);
            this.props.history.push({pathname: `/users/${this.props.currentUserId}`});
        }
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
                {this.props.currentUserId === this.props.track.user_id && <button className="track-delete" onClick={this.deleteTrack}>Delete Track</button>}
                <PanelContainer track={this.props.track} />
                <div className="comment-box">
                    <form
                        onSubmit={this.handleComment}
                    >
                        <label>
                            <input
                                type="text"
                                onChange={this.updateBody}
                                placeholder="Write a comment"
                                className="comment-text"
                                value={this.state.body}
                            />
                        </label>
                        <input className="hidden" type="submit" value="Comment"/>
                    </form>
                </div>
                <ul>
                    {Object.values(this.props.comments).sort((a,b) => {
                        if (a.id > b.id) {
                            return -1;
                        } else {
                            return 1;
                        }
                    }).map(comment => {
                        return (
                            <li className="comment-li" key={comment.id}>
                                <div className="comment-header">
                                    <Link 
                                        className="play-controls-artist"
                                        to={`/users/${comment.user_id}`}
                                    >{this.props.users[comment.user_id].username}</Link>
                                    <p>{comment.created_at}</p>
                                </div>
                                <div className="comment-content">
                                    <p>{comment.body}</p>
                                    {this.props.currentUserId === comment.user_id && 
                                    <button
                                        className="comment-delete"
                                        onClick={(e) => this.deleteComment(e,comment)}>Delete</button>}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TrackShow;