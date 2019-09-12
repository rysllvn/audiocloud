import React from 'react';

const RedirectLogin = ({setModalStatus}) => {
    return (
        <div className="redirect-login">
            <h1>You need to be signed in for this</h1>
            <button className="button-demo-login" onClick={() => setModalStatus('signIn')}>Sign in</button>
            <h1>or</h1>
            <button className="button-demo-login" onClick={() => setModalStatus('createAccount')}>Create account</button>
        </div>
    )
}

export default RedirectLogin;