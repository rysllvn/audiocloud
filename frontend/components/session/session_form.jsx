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
      password: '123456'
    }, () => document.getElementById("submit").click());
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

  //From stack overflow https://stackoverflow.com/questions/34349136/react-how-to-capture-only-parents-onclick-event-and-not-children
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
          <h3 className="session-title">{this.formType}<br/>or<br/></h3>          
          <button 
            className="button-switch-form"
            onClick={() => this.setModalStatus(this.otherForm)}
          >{this.otherFormNice}</button>

          <button 
            className="button-demo-login"
            onClick={this.demoLogin}
          >DEMO USER LOGIN</button>


          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="auth-errors">{this.renderErrors()}</div>
            <div className="login-form">
              <br/>
              <label>Username
                <br/>
                <input 
                  id="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Password
                <br/>
                <input 
                  id="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input id="submit" className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
          <Link className="link-session-form" to="/help">Need help?</Link>
          <p className="disclaimer">
            We may use your email and devices for updates and tips on SoundCloud's products and services,
            and for activities notifications. You can unsubscribe for free at any time in your notification settings.
            We may use information you provide us in our <Link className="link-session-form" to="/privacy">Privacy Policy.</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SessionForm;