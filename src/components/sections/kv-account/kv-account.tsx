import {Component} from '@stencil/core';

@Component({
  tag: 'kv-account',
  styleUrl: 'kv-account.css',
  shadow: true
})
export class KvAccount {

  render() {
    return (
      <stencil-route-link url="/detail/1">
        <div id="wrapper">
          <h3 id="name">
            Privatkonto
          </h3>
          <p id="balance">
            50'000 Fr.
          </p>
          <p id="iban">
            CH02 5239 1582 5832
          </p>
        </div>
      </stencil-route-link>
    )
  }
}
