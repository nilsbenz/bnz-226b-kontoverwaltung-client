import {Component} from '@stencil/core';

@Component({
  tag: 'kv-heading',
  styleUrl: 'kv-heading.css',
  shadow: true
})
export class KvHeading {

  render() {
    return (
      <h2>
        <slot/>
      </h2>
    )
  }
}
