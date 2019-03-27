import {Component, Prop, State} from '@stencil/core';
import {RouterHistory} from "@stencil/router";
import accountService from "../../../services/AccountService";

@Component({
  tag: 'kv-login',
  styleUrl: 'kv-login.css',
  shadow: true
})
export class KvLogin {

  @Prop() history: RouterHistory;

  @State() user;
  @State() alert: boolean;

  componentWillLoad() {
    this.user = {};
  }

  render() {
    return (
      <div id="wrapper">
        <kv-heading>Login</kv-heading>
        <form onSubmit={e => this.handleRegister(e)}>
          <label>
            Benutzername
            <input name="username" type="text" value={this.user.username} onInput={(event) => this.handleUsername(event)} autofocus required/>
          </label>
          <label>
            Passwort
            <input name="password" type="password" value={this.user.password} onInput={(event) => this.handlePassword(event)} required/>
          </label>
          <button type="submit">
            Login
          </button>
          {this.alert
            ? <p id="alert">Falscher Benutzername / Passwort</p>
            : {}
          }
          <div id="toLogin">
            Zum ersten Mal hier?
            <button type="button" onClick={() => this.handleLogin()}>Registrieren</button>
          </div>
        </form>
      </div>
    )
  }

  handleRegister(event) {
    event.preventDefault();
    const res = accountService.login(this.user);
    if(res.status === 200) {
      localStorage.setItem('authorization', 'logged_in');
      this.history.push('/');
    } else {
      this.alert = true;
    }
  }

  handleLogin() {
    this.history.push('/register');
  }

  handleUsername(event) {
    this.user.username = event.target.value;
  }

  handlePassword(event) {
    this.user.password = event.target.value;
  }
}
