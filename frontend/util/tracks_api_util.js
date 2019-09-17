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

export const getTracks = () => (
    $.ajax({
        method: 'GET',
        url: 'api/tracks'
    })
);

export const getTrack = id => (
    $.ajax({
        method: 'GET',
        url: `api/tracks/${id}`
    })
)