import React from 'react';
import ToggleMainContainer from './toggle_main_container';
import PlayControlsTitle from './play_controls_title';

class PlayControls extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentTrack !== prevProps.currentTrack) document.getElementById("audio").play();
        if (this.props.playing !== prevProps.playing) {
            if (this.props.playing) {
                document.getElementById("audio").play();
            } else {
            document.getElementById("audio").pause();
            }
        }
    }

    render () {
        let src;
        let trackId = this.props.currentTrack;
        let artist;
        let track;
        if (trackId) {
            track = this.props.tracks[trackId]
            src = track.audioUrl;
            artist = this.props.users[track.user_id];
        }

        return (
            <section className="play-controls">
                <div className="play-controls-inner">
                    <audio id="audio" src={src}/>
                    <ToggleMainContainer />
                    {
                        this.props.currentTrack 
                        && 
                        <PlayControlsTitle 
                            artist={artist}
                            track={this.props.tracks[trackId]}
                        />
                    }
                </div>
            </section>
        )
    }
}

export default PlayControls;