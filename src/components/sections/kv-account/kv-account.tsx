import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'kv-account',
  styleUrl: 'kv-account.css',
  shadow: true
})
export class KvAccount {

  @Prop() account;

  render() {
    return (
      <stencil-route-link url={"/detail/" + this.account.id}>
        <div id="wrapper">
          <h3 id="name">
            {this.account.name}
          </h3>
          <p id="balance">
            {this.account.balance} Fr.
          </p>
          <p id="iban">
            {this.account.iban}
          </p>
        </div>
      </stencil-route-link>
    )
  }
}
