export const selectUserTracks = (state, userId) => {
    let tracks = Object.values(state.entities.tracks);
    return tracks.filter(track => track.user_id == userId);
}