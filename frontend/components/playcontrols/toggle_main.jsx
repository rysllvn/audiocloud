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

class ToggleMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.togglePlay();
    }

    render() {
        let buttonText;        
        if (this.props.playing) {
            buttonText = pauseButton
        } else {
            buttonText = playButton;
        }        
        return (
            <button className='main-toggle' onClick={this.handleClick}>{buttonText}</button>
        )
    }
}

export default ToggleMain;