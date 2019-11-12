import React from 'react';
import { Link } from 'react-router-dom';

const PlayControlsTitle = ({artist, track}) => {
    let src;
    if (track.imageUrl) {
        src = track.imageUrl;
    } else {
        src = window.defaultTrackImage;
    }
    return (
        <div className="play-controls-song-info">
            <Link to={`/tracks/${track.id}`} className="play-controls-title"><img className="control-pic" src={src}/></Link>
            <div className="play-controls-header">
                <Link to={`/users/${artist.id}`} className="play-controls-artist">{artist.username}</Link>
                <Link to={`/tracks/${track.id}`} className="play-controls-title">{track.title}</Link>
            </div>
        </div> 
    )
};

export default PlayControlsTitle;