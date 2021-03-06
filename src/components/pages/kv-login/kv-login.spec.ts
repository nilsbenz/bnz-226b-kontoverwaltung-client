import {KvLogin} from "./kv-login";

describe('kv-detail', () => {
  let element;

  beforeEach(() => {
    element = new KvLogin();
    element.user = {};
  });

  it('handleUsernameInput', () => {
    //given

    //when
    element.handleUsername({
      target: {
        value: 'nbenz'
      }
    });

    //then
    expect(element.user.username).toBe('nbenz');
  });

  it('handlePasswordInput', () => {
    //given

    //when
    element.handlePassword({
      target: {
        value: 'verySecretPassword'
      }
    });

    //then
    expect(element.user.password).toBe('verySecretPassword');
  });
});
