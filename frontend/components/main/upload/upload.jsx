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
            uploading: false
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
        this.setState({
            uploading: true
        })
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[description]', this.state.description);
        formData.append('track[audio]', this.state.audioFile);
        this.props.createTrack(formData)
            .then(() => {
                this.setState({uploading: false})
            })
            .fail(() => {
                this.setState({uploading: false})
            });        
    }

    render() {
        if (this.state.uploading) {
            const override = css`
                                display: block;
                                margin: 0 auto;
                                border-color: red;
                            `;
            return (
                
            <div className='form-upload-container'>
                <ClipLoader 
                    css={override}
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.state.uploading}
                />
                <p>AHHHHHHHHHHHH</p>
            </div> 
            )
        }
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
                    <label>Audio
                        <input 
                            type="file"
                            onChange={this.handleAudio}
                        />
                    </label>
                    <label>Photo
                        <input
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