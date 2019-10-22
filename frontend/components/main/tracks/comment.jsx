import React from 'react';

function Comment({comment, user}) {
    return (
        <li>
            <p>{comment.body}</p>
            {/* <p>{user.username}</p> */}
        </li>
    )
}

export default Comment;