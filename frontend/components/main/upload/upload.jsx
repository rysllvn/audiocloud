import React from 'react';

class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            audioFile: null,
            photoFile: null
        };

        this.handleAudio = this.handleAudio.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    handleAudio(e) {
        this.setState({audioFile: e.currentTarget.files[0]})
    }

    handlePhoto(e) {

    }

    updateTitle(e) {
        this.setState({
            title: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.table(this.state)
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[description]', this.state.description);
        formData.append('track[audio]', this.state.audioFile);
        this.props.createTrack(formData);        
    }

    render() {
        return (
            <div className="form-upload-container">
                <h1>Upload an mp3 file</h1>
                <form 
                    onSubmit={this.handleSubmit}
                    className="form-upload"
                >
                    <label>
                        <input 
                            id="title"
                            type="text"
                            onChange={this.updateTitle}
                            placeholder="Title"
                        />
                    </label>

                    <label>Audio File
                        <input 
                            type="file"
                            onChange={this.handleAudio}
                        />
                    </label>

                    <label>
                        <input
                            type="file"
                            onChange={this.handlePhoto}
                        />
                    </label>

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Upload;