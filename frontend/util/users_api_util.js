export const getUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);

export const updateUser = data => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${data.userId}`,
        data: data.updates,
        contentType: false,
        processData: false
    })
);