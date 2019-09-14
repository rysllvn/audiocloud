export const getUserTracks = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}/tracks`
    })
);