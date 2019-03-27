class AccountService {

  private accounts: Array<any> = [
    {
      id: 1,
      name: "Privatkonto",
      balance: 50000.35,
      iban: "CH02 4580 2349 1248"
    },
    {
      id: 2,
      name: "Sparkonto",
      balance: 200.25,
      iban: "CH02 2358 6782 2581"
    },
    {
      id: 3,
      name: "Familienkonto",
      balance: 12935.10,
      iban: "CH02 0157 1471 4795"
    }
  ];

  private nextId: number = 4;

  login(user: object) {
    console.log(user);
    return {status: 200};
  }

  register(user: object) {
    console.log(user);
    return {status: 200};
  }

  getAccounts() {
    return this.accounts;
  }

  getAccount(id: number) {
    return this.accounts.find(a => a.id === id)
  }

  createAccount(account: object) {
    account = {...account, id: this.nextId};
    this.nextId++;
    this.accounts.push(account);
  }

  deleteAccount(id: number) {
    const idToDelete = this.accounts.indexOf(a => a.id === id);
    this.accounts.splice(idToDelete, 1);
  }

  transaction(id: number, amount: number) {
    let accountId = this.accounts.findIndex(a => a.id == id);
    this.accounts[accountId].balance += amount;
    return this.accounts[accountId];
  }
}

const accountService = new AccountService();

export default accountService;
