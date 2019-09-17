export const getUserTracks = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}/tracks`
    })
);

export const createTrack = track => (
    $.ajax({
        method: 'POST',
        url: 'api/tracks',
        data: track,
        contentType: false,
        processData: false
    })
)

export const getTracks = num => (
    $.ajax({
        method: 'GET',
        url: 'api/tracks'
    })
);