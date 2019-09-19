import React from 'react';

const playButton = <svg 
                        className="toggle-icon-play"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 22v-20l18 10-18 10z"/>
                    </svg>;

const pauseButton = <svg 
                        className="toggle-icon-pause"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>
                    </svg>;

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.trackId === this.props.currentTrack) {
            this.props.togglePlay();
        } else {
            this.props.setCurrentTrack(this.props.trackId);
        }
    }

    render() {
        let buttonText;
        let name = this.props.type;
        if (this.props.trackId === this.props.currentTrack) {
            if (this.props.playing) {
                buttonText = pauseButton
                name = this.props.type + "-show";
            } else {
                buttonText = playButton;
            }
        } else {
            buttonText = playButton;
        }
        return (
            <button className={name} onClick={this.handleClick}>{buttonText}</button>
        )
    }
}

export default ToggleButton;