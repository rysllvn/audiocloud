export const selectUserTracks = (state, userId) => {
    let tracks = Object.values(state.entities.tracks);
    return tracks.filter(track => track.user_id == userId);
};

export const selectSearchResults = (state, searchTerm) => {
    let tracks = Object.values(state.entities.tracks).filter(track => track.title.toLowerCase().includes(searchTerm.toLowerCase()));
    let users = Object.values(state.entities.users).filter(user => user.username.includes(searchTerm));
    return {
        tracks,
        users
    }
};