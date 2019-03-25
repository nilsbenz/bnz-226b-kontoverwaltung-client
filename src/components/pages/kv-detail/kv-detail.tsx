import {Component, Prop} from '@stencil/core';
import {RouterHistory} from "@stencil/router";

@Component({
  tag: 'kv-detail',
  styleUrl: 'kv-detail.css',
  shadow: true
})
export class KvDetail {

  @Prop() history: RouterHistory;

  render() {
    return (
      <div id="wrapper">
        <kv-heading id="title">Detail</kv-heading>
        <div id="content">
          <button id="back" onClick={() => this.history.goBack()}>Zurück</button>
          <div id="account">
            <h3 id="name">
              Privatkonto
            </h3>
            <p id="balance">
              50'000 Fr.
            </p>
            <p id="iban">
              CH02 1248 8246 1492
            </p>
            <div id="buttons">
              <button>Auszahlen</button>
              <button class="primaryButton">Einzahlen</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
