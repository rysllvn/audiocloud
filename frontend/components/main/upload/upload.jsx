import React from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            audioFile: null,
            photoFile: null,
            uploading: false,
            status: null,
            errors: ''
        };

        this.handleAudio = this.handleAudio.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    handleAudio(e) {
        if (e.currentTarget.files[0].type === "audio/mp3") {
            this.setState({audioFile: e.currentTarget.files[0]});
        } else {
            e.currentTarget.value = null;
            this.setState({errors: 'must upload an mp3 file'});
        }
    }

    handlePhoto(e) {
        let type = e.currentTarget.files[0].type
        if (type === "image/png" || type === "image/jpg" || type === "image/jpeg") {
            this.setState({photoFile: e.currentTarget.files[0]});
        } else {
            e.currentTarget.value = null;
            this.setState({errors: 'must upload a jpeg'});
        }
    }

    updateTitle(e) {
        this.setState({
            title: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            uploading: true
        });
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[audio]', this.state.audioFile);
        if (this.state.photoFile) formData.append('track[image]', this.state.photoFile);
        
        this.props.createTrack(formData)
            .then(() => {
                this.setState({
                    uploading: false,
                    status: 'Upload complete'
                });
            })
            .fail(errors => {
                this.setState({
                    uploading: false,
                    status: 'Upload failed'
                })
            });        
    }

    render() {
        if (this.state.uploading) {
            const override = css`
                                display: block;
                                margin: 0 auto;
                                border-color: orange;
                                margin-top: 100px;
                            `;
            return (
                
            <div className="loader-main">
                <ClipLoader 
                    css={override}
                    sizeUnit={"px"}
                    size={300}
                    color={'#123abc'}
                    loading={this.state.uploading}
                />
            </div> 
            )
        }
        let audioName = 'Click below to upload the audio file';
        if (this.state.audioFile) {
            audioName = this.state.audioFile.name;
        }
        return (
            <div className="form-upload-container">
                <h1>Upload an mp3 file</h1>
                <h4 >{this.state.status}</h4>
                <h4 >{this.state.errors}</h4>
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
                            className="upload-title"
                            value={this.title}
                        /> 
                    </label>
                    <p>{audioName}</p>
                    <label className="file-upload-button" htmlFor="audio-input">
                        <p>Upload the audio file</p>
                        <input 
                            id="audio-input"
                            type="file"
                            onChange={this.handleAudio}
                        />
                    </label>
                    <label className="file-upload-button" htmlFor="image-input">
                        <p>Upload an image (optional)</p>
                        <input
                            id="image-input"
                            type="file"
                            onChange={this.handlePhoto}
                        />
                    </label>

                    <input className="session-submit" type="submit" />
                </form>
            </div>
        )
    }
}

export default Upload;