/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import {
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface KvHeading {}
  interface KvHeadingAttributes extends StencilHTMLAttributes {}

  interface KvDetail {
    'history': RouterHistory;
  }
  interface KvDetailAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface KvHome {}
  interface KvHomeAttributes extends StencilHTMLAttributes {}

  interface KvLogin {
    'history': RouterHistory;
  }
  interface KvLoginAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface KvRegister {
    'history': RouterHistory;
  }
  interface KvRegisterAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface KvRoot {}
  interface KvRootAttributes extends StencilHTMLAttributes {}

  interface KvAccount {}
  interface KvAccountAttributes extends StencilHTMLAttributes {}

  interface KvFooter {}
  interface KvFooterAttributes extends StencilHTMLAttributes {}

  interface KvHeader {}
  interface KvHeaderAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'KvHeading': Components.KvHeading;
    'KvDetail': Components.KvDetail;
    'KvHome': Components.KvHome;
    'KvLogin': Components.KvLogin;
    'KvRegister': Components.KvRegister;
    'KvRoot': Components.KvRoot;
    'KvAccount': Components.KvAccount;
    'KvFooter': Components.KvFooter;
    'KvHeader': Components.KvHeader;
  }

  interface StencilIntrinsicElements {
    'kv-heading': Components.KvHeadingAttributes;
    'kv-detail': Components.KvDetailAttributes;
    'kv-home': Components.KvHomeAttributes;
    'kv-login': Components.KvLoginAttributes;
    'kv-register': Components.KvRegisterAttributes;
    'kv-root': Components.KvRootAttributes;
    'kv-account': Components.KvAccountAttributes;
    'kv-footer': Components.KvFooterAttributes;
    'kv-header': Components.KvHeaderAttributes;
  }


  interface HTMLKvHeadingElement extends Components.KvHeading, HTMLStencilElement {}
  var HTMLKvHeadingElement: {
    prototype: HTMLKvHeadingElement;
    new (): HTMLKvHeadingElement;
  };

  interface HTMLKvDetailElement extends Components.KvDetail, HTMLStencilElement {}
  var HTMLKvDetailElement: {
    prototype: HTMLKvDetailElement;
    new (): HTMLKvDetailElement;
  };

  interface HTMLKvHomeElement extends Components.KvHome, HTMLStencilElement {}
  var HTMLKvHomeElement: {
    prototype: HTMLKvHomeElement;
    new (): HTMLKvHomeElement;
  };

  interface HTMLKvLoginElement extends Components.KvLogin, HTMLStencilElement {}
  var HTMLKvLoginElement: {
    prototype: HTMLKvLoginElement;
    new (): HTMLKvLoginElement;
  };

  interface HTMLKvRegisterElement extends Components.KvRegister, HTMLStencilElement {}
  var HTMLKvRegisterElement: {
    prototype: HTMLKvRegisterElement;
    new (): HTMLKvRegisterElement;
  };

  interface HTMLKvRootElement extends Components.KvRoot, HTMLStencilElement {}
  var HTMLKvRootElement: {
    prototype: HTMLKvRootElement;
    new (): HTMLKvRootElement;
  };

  interface HTMLKvAccountElement extends Components.KvAccount, HTMLStencilElement {}
  var HTMLKvAccountElement: {
    prototype: HTMLKvAccountElement;
    new (): HTMLKvAccountElement;
  };

  interface HTMLKvFooterElement extends Components.KvFooter, HTMLStencilElement {}
  var HTMLKvFooterElement: {
    prototype: HTMLKvFooterElement;
    new (): HTMLKvFooterElement;
  };

  interface HTMLKvHeaderElement extends Components.KvHeader, HTMLStencilElement {}
  var HTMLKvHeaderElement: {
    prototype: HTMLKvHeaderElement;
    new (): HTMLKvHeaderElement;
  };

  interface HTMLElementTagNameMap {
    'kv-heading': HTMLKvHeadingElement
    'kv-detail': HTMLKvDetailElement
    'kv-home': HTMLKvHomeElement
    'kv-login': HTMLKvLoginElement
    'kv-register': HTMLKvRegisterElement
    'kv-root': HTMLKvRootElement
    'kv-account': HTMLKvAccountElement
    'kv-footer': HTMLKvFooterElement
    'kv-header': HTMLKvHeaderElement
  }

  interface ElementTagNameMap {
    'kv-heading': HTMLKvHeadingElement;
    'kv-detail': HTMLKvDetailElement;
    'kv-home': HTMLKvHomeElement;
    'kv-login': HTMLKvLoginElement;
    'kv-register': HTMLKvRegisterElement;
    'kv-root': HTMLKvRootElement;
    'kv-account': HTMLKvAccountElement;
    'kv-footer': HTMLKvFooterElement;
    'kv-header': HTMLKvHeaderElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
