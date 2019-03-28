import {KvDetail} from "./kv-detail";

describe('kv-detail', () => {
  let element;

  beforeEach(() => {
    element = new KvDetail()
  });

  it('calculatePositiveBalance', () => {
    //given
    element.amount = 0;

    //when
    element.handleInput({
      target: {
        value: 20
      }
    }, 1);

    //then
    expect(element.amount).toBe(20);
  });

  it('calculateNegativeBalance', () => {
    //given
    element.amount = 0;

    //when
    element.handleInput({
      target: {
        value: 20
      }
    }, -1);

    //then
    expect(element.amount).toBe(-20);
  });

  it('abortPopup', () => {
    //given
    element.addMoney = true;
    element.getMoney = true;

    //when
    element.abort();

    //then
    expect(element.addMoney).toBe(false);
    expect(element.getMoney).toBe(false);
  });
});
