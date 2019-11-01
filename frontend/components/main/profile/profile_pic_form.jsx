import React from 'react';

class ProfilePicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null,
            errors: null,
            status: 'Upload a photo here',
            uploading: false,
        };
        this.handlePhoto = this.handlePhoto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[image]', this.state.photoFile);
        this.setState({uploading: true})
        
        this.props.updateUser({
            userId: this.props.id,
            updates: formData
        })
        .then(() => {
            this.setState({status: 'photo uploaded', uploading: false})
        });
    }

    render () {
        if (this.state.uploading) {
            return (
                <div>Uploading yo</div>
            )
        } else {
            return (
                <div>
                    <h4>{this.state.status}</h4>
                    <h4>{this.state.errors}</h4>
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <label htmlFor="image-input">Upload
                            <input
                                id="image-input"
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
}

export default ProfilePicForm;