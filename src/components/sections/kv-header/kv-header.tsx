import {Component, Prop} from '@stencil/core';
import toggleDarkMode from '../../../global/app';
import {RouterHistory} from "@stencil/router";

@Component({
  tag: 'kv-header',
  styleUrl: 'kv-header.css',
  shadow: true
})
export class KvHeader {

  @Prop() history: RouterHistory;

  render() {
    return (
      <header>
        <h1>
          Kontoverwaltung
        </h1>
        <div>
          <i class="fas fa-moon" onClick={() => toggleDarkMode()} title="Dark Mode"/>
          <stencil-route-link url="/login">
            <i class="fas fa-sign-out-alt" title="Ausloggen" onClick={() => localStorage.removeItem('authorization')}/>
          </stencil-route-link>
        </div>
      </header>
    )
  }
}
