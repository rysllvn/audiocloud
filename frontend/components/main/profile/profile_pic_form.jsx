import React from 'react';

class ProfilePicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null,
            errors: null,
            status: 'Upload a photo here',
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
        this.props.updateUser({
            userId: this.props.id,
            updates: formData
        })
            .then(() => {
                this.setState({status: 'photo uploaded'})
            });
    }

    render () {
        return (
            <div>
                <h4>{this.state.status}</h4>
                <h4>{this.state.errors}</h4>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <label className="file-upload-button" htmlFor="image-input">Upload an image (optional)
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

export default ProfilePicForm;