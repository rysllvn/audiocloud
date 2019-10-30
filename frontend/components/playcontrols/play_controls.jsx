import React from 'react';
import ToggleMainContainer from './toggle_main_container';
import PlayControlsTitle from './play_controls_title';
import ProgressBar from './progress_bar';

const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    if (seconds < 10) {
        return minutes + ' : 0' + seconds;
    } else {
        return minutes + ' : ' + seconds;
    }
}

class PlayControls extends React.Component {
    constructor(props) {
        super(props);
        this.audio = null;
        this.state = {
            currentTime: null,
            max: null,
        };
    }

    componentDidMount() {
        const audio = document.getElementById('audio');
        this.audio = audio
        this.audio.addEventListener('timeupdate', () => {
            this.setState({currentTime: this.audio.currentTime, max: this.audio.duration});
            // console.log(this.audio.currentTime, this.audio.duration);
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
                    <p>{formatTime(this.state.currentTime)}</p>
                    <ProgressBar curTime={this.state.currentTime} max={this.state.max} />
                    <p>{formatTime(this.state.max)}</p>
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