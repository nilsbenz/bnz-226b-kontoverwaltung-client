import {Component, Prop} from '@stencil/core';
import {RouterHistory} from "@stencil/router";

@Component({
  tag: 'kv-login',
  styleUrl: 'kv-login.css',
  shadow: true
})
export class KvLogin {

  @Prop() history: RouterHistory;

  render() {
    return (
      <div id="wrapper">
        <kv-heading>Login</kv-heading>
        <form onSubmit={e => this.handleRegister(e)}>
          <label>
            Benutzername
            <input name="username" type="text" autofocus/>
          </label>
          <label>
            Passwort
            <input name="password" type="password"/>
          </label>
          <button type="submit">
            Login
          </button>
          <div id="toLogin">
            Du bist noch nicht registriert?
            <button type="button" onClick={() => this.handleLogin()}>Registrieren</button>
          </div>
        </form>
      </div>
    )
  }

  handleRegister(event) {
    event.preventDefault();
    this.history.push('/');
  }

  handleLogin() {
    this.history.push('/register');
  }
}
