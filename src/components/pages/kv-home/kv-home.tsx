import {Component, Prop, State} from '@stencil/core';
import accountService from "../../../services/AccountService";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: 'kv-home',
  styleUrl: 'kv-home.css',
  shadow: true
})
export class KvHome {

  @Prop() history: RouterHistory;

  @State() accounts: Array<any>;
  @State() addAccount: boolean;
  @State() account;

  async componentWillLoad() {
    this.accounts = [];
    if(localStorage.getItem('authorization') !== 'logged_in') {
      this.history.push('/login');
    }
    this.accounts = await accountService.getAccounts();
    this.account = {
      name: '',
      iban: '',
      balance: 0
    }
  }

  render() {
    return [
      <div id="wrapper">
        <kv-heading>Konten</kv-heading>
        <div id="accounts">
          {this.accounts.map(account =>
            <kv-account account={account}/>
          )}
          <button onClick={() => this.addAccount = true} class="primaryButton flexEnd"><i class="fas fa-plus"/> Konto hinzufügen</button>
        </div>
      </div>,
      this.addAccount
        ? <div id="popup">
          <div id="popupWrapper">
            <h3>Konto hinzufügen</h3>
            <form onSubmit={e => this.handleSubmit(e)}>
              <label>
                Name:
                <input type="text" onInput={e => this.handleNameInput(e)} required/>
              </label>
              <label>
                Kontonummer:
                <input type="text" onInput={e => this.handleIbanInput(e)} required/>
              </label>
              <label>
                Kontostand:
                <input type="number" step=".01" class="marginRight" onInput={e => this.handleBalanceInput(e)} required/>
                Fr.
              </label>
              <div id="buttons">
                <button type="button" onClick={() => this.addAccount = false}>Abbrechen</button>
                <button class="primaryButton" type="submit">Speichern</button>
              </div>
            </form>
          </div>
        </div>
        : {}
    ]
  }

  async handleSubmit(event) {
    event.preventDefault();
    await accountService.createAccount(this.account);
    this.accounts = await accountService.getAccounts();
    this.addAccount = false;
  }

  handleNameInput(event) {
    this.account.name = event.target.value;
  }

  handleIbanInput(event) {
    this.account.iban = event.target.value;
  }

  handleBalanceInput(event) {
    this.account.balance = event.target.value;
  }
}
