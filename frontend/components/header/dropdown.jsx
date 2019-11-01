import React from 'react';

class Dropdown extends React.Component {
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
                ><i className="fas fa-ellipsis-h"></i></a>
                { this.state.open ? (
                        <div className="nav-dropdown-content">
                            <a className="dropdown-item"
                                onClick={() => this.props.history.push({pathname: '/about'})}>About</a>
                            <a
                                className="dropdown-item"
                                onClick={() => {
                                    this.props.history.push({pathname: '/'});
                                    this.props.logout();
                                }} 
                            >Logout</a>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        )        
    }
}

export default Dropdown;