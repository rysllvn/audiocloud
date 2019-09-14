import React from 'react';

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('upload')
    }

    render() {
        return (
            <div className="form-upload-container">
                <h1>Upload an mp3 file</h1>
                <form onSubmit={this.handleSubmit}className="form-upload">
                    <label>Title
                        <input type="text"/>
                    </label>
                    <label>Description
                        <input type="text"/>
                    </label>
                    <label>
                        <input type="file"/>
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Upload;