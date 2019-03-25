import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'kv-root',
  styleUrl: 'kv-root.css',
  shadow: true
})
export class KvRoot {

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
              <stencil-route url='/detail/:account' component='kv-detail' />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <kv-footer/>
      </div>
    );
  }
}
