import {Component, Prop, State} from '@stencil/core';
import {MatchResults, RouterHistory} from "@stencil/router";
import accountService from "../../../services/AccountService";

@Component({
  tag: 'kv-detail',
  styleUrl: 'kv-detail.css',
  shadow: true
})
export class KvDetail {

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() account;
  @State() addMoney: boolean;
  @State() getMoney: boolean;
  @State() amount: number;

  componentWillLoad() {
    this.account = accountService.getAccount(Number(this.match.params.id));
  }

  render() {
    return (
      <div id="wrapper">
        <kv-heading id="title">Detail</kv-heading>
        <div id="content">
          <button id="back" onClick={() => this.history.goBack()}>Zurück</button>
          <div id="account">
            <div id="title">
              <h3>
                {this.account.name}
              </h3>
              <i class="fas fa-trash-alt" title="Löschen" onClick={() => this.handleDelete()}/>
            </div>
            <p>
              Kontostand: {this.account.balance}
            </p>
            <p>
              Kontonummer: {this.account.iban}
            </p>
            <div id="buttons">
              <button class="primaryButton" onClick={() => this.getMoney = true}>Auszahlen</button>
              <button class="primaryButton" onClick={() => this.addMoney = true}>Einzahlen</button>
            </div>
          </div>
        </div>
        {this.addMoney
          ? this.renderAddMoney()
          : {}
        }
        {this.getMoney
          ? this.renderGetMoney()
          : {}
        }
      </div>
    )
  }

  renderGetMoney() {
    return (
      <div id="popup">
        <div id="popupWrapper">
          <h3>Wie viel Geld möchtest du auszahlen?</h3>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label>
            <input type="number" step=".01" onInput={e => this.handleInput(e, -1)} required/>
            Fr.
            </label>
            <div>
              <button type="button" onClick={() => this.abort()}>Abbrechen</button>
              <button class="primaryButton" type="submit">Auszahlen</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  renderAddMoney() {
    return (
      <div id="popup">
        <div id="popupWrapper">
          <h3>Wie viel Geld möchtest du einzahlen?</h3>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label>
              <input type="number" step=".01" onInput={e => this.handleInput(e, 1)} required/>
              Fr.
            </label>
            <div>
              <button type="button" onClick={() => this.abort()}>Abbrechen</button>
              <button class="primaryButton" type="submit">Einzahlen</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  handleInput(event, multiplier) {
    this.amount = event.target.value * multiplier;
    console.log(this.amount);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.account = {...accountService.transaction(Number(this.match.params.id), this.amount)};
    this.abort();
  }

  abort() {
    this.addMoney = false;
    this.getMoney = false;
  }

  handleDelete() {
    accountService.deleteAccount(Number(this.match.params.id));
    this.history.push('/');
  }
}
