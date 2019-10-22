export const postComment = comment => (
    $.ajax({
        method: 'POST',
        url: `api/comments`,
        data: comment
    })
);