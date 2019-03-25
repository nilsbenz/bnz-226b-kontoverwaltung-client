import {Component} from '@stencil/core';

@Component({
  tag: 'kv-footer',
  styleUrl: 'kv-footer.css',
  shadow: true
})
export class KvFooter {

  render() {
    return (
      <footer>
        <p>&copy; 2019 Nils & Nils</p>
      </footer>
    )
  }
}
