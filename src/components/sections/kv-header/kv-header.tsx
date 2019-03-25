import {Component} from '@stencil/core';

@Component({
  tag: 'kv-header',
  styleUrl: 'kv-header.css',
  shadow: true
})
export class KvHeader {

  render() {
    return (
      <header>
        <h1>
          Kontoverwaltung
        </h1>
        <stencil-route-link url="/login">
          <i class="fas fa-sign-out-alt" title="Ausloggen"/>
        </stencil-route-link>
      </header>
    )
  }
}
