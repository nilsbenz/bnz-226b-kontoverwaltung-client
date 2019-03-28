import {KvHome} from "./kv-home";

describe('kv-detail', () => {
  let element;

  beforeEach(() => {
    element = new KvHome();
    element.account = {
      name: '',
      iban: '',
      balance: 0
    };
  });

  it('handleNameInput', () => {
    //given

    //when
    element.handleNameInput({
      target: {
        value: 'test'
      }
    });

    //then
    expect(element.account.name).toBe('test');
  });

  it('handleIbanInput', () => {
    //given

    //when
    element.handleIbanInput({
      target: {
        value: 'CH02 3458 2348 8537'
      }
    });

    //then
    expect(element.account.iban).toBe('CH02 3458 2348 8537');
  });

  it('handleBalanceInput', () => {
    //given

    //when
    element.handleBalanceInput({
      target: {
        value: 200
      }
    });

    //then
    expect(element.account.balance).toBe(200);
  });
});
