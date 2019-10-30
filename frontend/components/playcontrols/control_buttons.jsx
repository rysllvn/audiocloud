import React from 'react';

const playButton = <svg 
                        className="main-toggle-icon-play"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 22v-20l18 10-18 10z"/>
                    </svg>;

const pauseButton = <svg 
                        className="main-toggle-icon-pause"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>
                    </svg>;

class ControlButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.togglePlay();
    }

    render() {       
        if (this.props.playing) {
            return (
                <div
                    className="control-buttons"
                >
                    <svg onClick={this.handleClick}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            )
            
        } else {
            return (
                <div
                    className="control-buttons"
                >
                    {/* <i 
                        class="fas fa-play-circle"
                        onClick={this.handleClick}
                        style={{
                            cursor: 'pointer'
                        }}
                    /> */}
                    <svg 
                        onClick={this.handleClick}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            )
        }
    }
}

export default ControlButtons;