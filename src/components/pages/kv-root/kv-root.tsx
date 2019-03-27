import { Component } from '@stencil/core';
import '@stencil/router';
import toggleDarkMode from '../../../global/app';

@Component({
  tag: 'kv-root',
  styleUrl: 'kv-root.css',
  shadow: true
})
export class KvRoot {

  componentWillLoad() {
    toggleDarkMode(true);
  }

  render() {
    return (
      <div>
        <kv-header/>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='kv-home' exact={true} />
              <stencil-route url='/login' component='kv-login' />
              <stencil-route url='/register' component='kv-register' />
              <stencil-route url='/detail/:id' component='kv-detail' />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <kv-footer/>
      </div>
    );
  }
}
