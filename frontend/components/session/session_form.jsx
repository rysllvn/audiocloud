import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      modalClass: 'modal-content',
      modalContainerClass: 'modal'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formType = this.props.formType;
    this.otherForm = this.props.otherForm;
    this.otherFormNice = this.props.otherFormNice;
    this.setModalStatus = this.props.setModalStatus;
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    this.setState({
      username: 'ryan',
      password: 'goodpass'
    }, () => {
      this.setState({
        modalClass: 'modal-content-out',
        modalContainerClass: 'modal-out'
      })
      this.props.loginUser({username: 'ryan', password: 'qwerty'});
      setTimeout(() => this.setModalStatus(false), 200);
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => {
        this.setState({
          modalClass: 'modal-content-out',
          modalContainerClass: 'modal-out'
        })
        setTimeout(() => this.setModalStatus(false), 400);
        this.props.history.push({pathname: "/explore"});
      });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  onModalContentClick(event) {
    if (event.target === event.currentTarget) {
      this.setState({
        modalClass: 'modal-content-out',
        modalContainerClass: 'modal-out'
      })
      setTimeout(() => this.setModalStatus(false), 400);
    }
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  render() {
    return (
      <div className={this.state.modalContainerClass} onClick={this.onModalContentClick.bind(this)}>
        <div className={this.state.modalClass}>
          <button 
            className="button-demo-login"
            onClick={this.demoLogin}
          >Login with demo user credentials</button>        

          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="auth-errors">{this.renderErrors()}</div>
            <div className="login-form">
              <label>
                <input 
                  id="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                  maxLength="24"
                />
              </label>
              <br/>
              <label>
                <br/>
                <input 
                  id="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                  maxLength="24"
                />
              </label>
              <br/>
              <input id="submit" className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
          <button 
            className="button-switch-form"
            onClick={() => this.setModalStatus(this.otherForm)}
          >{this.otherFormNice}</button> 
        </div>
      </div>
    );
  }
}

export default SessionForm;