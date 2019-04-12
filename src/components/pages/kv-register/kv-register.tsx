import {Component, Prop, State} from '@stencil/core';
import {RouterHistory} from "@stencil/router";
import accountService from "../../../services/AccountService";

@Component({
  tag: 'kv-register',
  styleUrl: 'kv-register.css',
  shadow: true
})
export class KvRegister {

  @Prop() history: RouterHistory;

  @State() user;
  @State() alert: boolean;

  componentWillLoad() {
    this.user = {};
  }

  render() {
    return (
      <div id="wrapper">
        <kv-heading>Registrieren</kv-heading>
        <form onSubmit={e => this.handleLogin(e)}>
          <label>
            Benutzername
            <input name="username" type="text" value={this.user.username} onInput={(event) => this.handleUsername(event)} autofocus required/>
          </label>
          <label>
            Passwort
            <input name="password" type="password" value={this.user.password} onInput={(event) => this.handlePassword(event)} required/>
          </label>
          <button type="submit">
            Registrieren
          </button>
          {this.alert
            ? <p id="alert">Benutzername ist bereits vergeben</p>
            : {}
          }
          <div id="toLogin">
            Bereits registriert?
            <button type="button" onClick={() => this.handleRegister()}>Einloggen</button>
          </div>
        </form>
      </div>
    )
  }

  async handleLogin(event) {
    event.preventDefault();
    const res = await accountService.register(this.user);
    if(res.status === 201) {
      localStorage.setItem('authorization', 'logged_in');
      this.history.push('/');
    } else {
      this.alert = true;
    }
  }

  handleRegister() {
    this.history.push('/login');
  }

  handleUsername(event) {
    this.user.username = event.target.value;
  }

  handlePassword(event) {
    this.user.password = event.target.value;
  }
}
