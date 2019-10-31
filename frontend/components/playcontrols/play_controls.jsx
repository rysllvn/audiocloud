import React from 'react';
import ToggleMainContainer from './control_buttons_container';
import PlayControlsTitle from './play_controls_title';
import ProgressBar from './progress_bar';

class PlayControls extends React.Component {
    constructor(props) {
        super(props);
        this.audio = null;
        this.state = {
            currentTime: 0,
            max: 0,
        };
    }

    componentDidMount() {
        const audio = document.getElementById('audio');
        this.audio = audio
        this.audio.addEventListener('timeupdate', () => {
            this.setState({currentTime: this.audio.currentTime, max: this.audio.duration});
        });
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

    render() {
        let src, artist, track;
        
        if (this.props.currentTrack) {
            track = this.props.tracks[this.props.currentTrack];
            src = track.audioUrl;
            artist = this.props.users[track.user_id];
        }

        const controls = <div className="play-controls-inner">                            
                            <ToggleMainContainer />
                            <ProgressBar curTime={this.state.currentTime} max={this.state.max} />
                            <PlayControlsTitle artist={artist} track={track}/>
                        </div>

        return (
            <section className="play-controls">
                <audio id="audio" src={src}/>
                {src && controls}
            </section>
        )
    }
}

export default PlayControls;