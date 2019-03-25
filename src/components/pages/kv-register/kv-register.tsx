import {Component, Prop} from '@stencil/core';
import {RouterHistory} from "@stencil/router";

@Component({
  tag: 'kv-register',
  styleUrl: 'kv-register.css',
  shadow: true
})
export class KvRegister {

  @Prop() history: RouterHistory;

  render() {
    return (
      <div id="wrapper">
        <kv-heading>Registrieren</kv-heading>
        <form onSubmit={e => this.handleLogin(e)}>
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
            Du bist bereits registriert?
            <button type="button" onClick={() => this.handleRegister()}>Einloggen</button>
          </div>
        </form>
      </div>
    )
  }

  handleLogin(event) {
    event.preventDefault();
    this.history.push('/');
  }

  handleRegister() {
    this.history.push('/login');
  }
}
