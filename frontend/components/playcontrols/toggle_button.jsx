import React from 'react';

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
                buttonText = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>
                             </svg>;
            } else {
                buttonText = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M3 22v-20l18 10-18 10z"/>
                             </svg>;
            }  
            if (this.props.playing) name = this.props.type + "-show";
        } else {
            buttonText = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M3 22v-20l18 10-18 10z"/>
                         </svg>;
        }
        return (
            <button className={name} onClick={this.handleClick}>{buttonText}</button>
        )
    }
}

export default ToggleButton;