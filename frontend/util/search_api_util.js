export const searchBasic = data => (
    $.ajax({
        method: 'GET',
        url: '/api/searches',
        data
    })
);