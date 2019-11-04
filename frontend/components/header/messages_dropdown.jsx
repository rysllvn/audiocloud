import React from 'react';

class MessagesDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openDropDown = this.openDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    openDropDown() {
        this.setState({open: true}, () => {
            document.addEventListener('click', this.closeDropDown);
        })
    }

    closeDropDown() {
        this.setState({open: false}, () => {
            document.removeEventListener('click', this.closeDropDown);
        })
    }

    render() {
        return (
            <div className={this.state.open ? "selected-dropdown" : "nav-dropdown"}>
                <a 
                    className="nav-dropdown-button"
                    onClick={this.openDropDown}
                ><i className="fas fa-envelope"></i></a>
                { this.state.open ? (
                        <div className="nav-dropdown-content">
                            <a className="dropdown-item"
                            >No messages</a>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        )        
    }
}

export default MessagesDropdown;