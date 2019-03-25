import {Component} from '@stencil/core';

@Component({
  tag: 'kv-home',
  styleUrl: 'kv-home.css',
  shadow: true
})
export class KvHome {

  render() {
    return (
      <div id="wrapper">
        <kv-heading>Home</kv-heading>
        <div id="accounts">
          <kv-account/>
          <kv-account/>
        </div>
      </div>
    )
  }
}
