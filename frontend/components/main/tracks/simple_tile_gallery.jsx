import TrackTileContainer from './track_tile_container';

const SimpleTileGallery = tracks => {
    <ul>
        {tracks.map(track => {
            <TrackTileContainer track={track} />
        })}
    </ul>
};

export default SimpleTileGallery;