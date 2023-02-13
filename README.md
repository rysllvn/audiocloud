# Audiocloud
> Clone of Audiocloud to sharpen React, Redux, and Rails skills.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
A clone of Soundcloud with full CRUD capabilities for tracks.

## Screenshots
![]()

## Technologies
* React.js
* Redux.js
* Ruby on Rails
* PostgreSQL
* SASS

## Code Examples
Creating the toggle button (play/pause) that would be rendered onto the track tiles was a fun challenge.
There is some interesting logic for when they show, requiring interaction between the CSS and the React Component,
and the global state of the app handled with Redux.
```
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
```

## Inspiration
Soundcloud

## Contact
Created by [Ryan Sullivan](https://www.linkedin.com/in/ryan-sullivan-32080223/) - feel free to contact me!
