import React from 'react';

class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            audioFile: null
        };

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    handleFile(e) {
        this.setState({audioFile: e.currentTarget.files[0]})
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
        $.ajax({
            url: '/api/tracks',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then((response) => console.log(response.message))
        
    }

    render() {
        return (
            <div className="form-upload-container">
                <h1>Upload an mp3 file</h1>
                <form 
                    onSubmit={this.handleSubmit}
                    className="form-upload"
                >
                    <label>Title
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
                            onChange={this.handleFile}
                        />
                    </label>

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Upload;