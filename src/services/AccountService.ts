class AccountService {

  private baseURL = 'http://localhost:8080';

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
    /*
    fetch(this.baseURL + '/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
    */
    console.log(this.baseURL);
    console.log(user);
    return {status: 200};
  }

  register(user: object) {
    /*
    fetch(this.baseURL + '/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
    */
    console.log(user);
    return {status: 200};
  }

  getAccounts() {
    //fetch(this.baseURL + '/api/accounts');

    return this.accounts;
  }

  getAccount(id: number) {
    //fetch(this.baseURL + `/api/accounts/${id}`);

    return this.accounts.find(a => a.id === id)
  }

  createAccount(account: object) {
    /*
    fetch(this.baseURL + '/api/accounts', {
      method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'content-type': 'application/json'
      }
    });
    */
    account = {...account, id: this.nextId};
    this.nextId++;
    this.accounts.push(account);
  }

  deleteAccount(id: number) {
    /*
    fetch(this.baseURL + `/api/accounts/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    });
    */
    const idToDelete = this.accounts.indexOf(a => a.id === id);
    this.accounts.splice(idToDelete, 1);
  }

  transaction(account: any, amount: number) {
    account.balance += amount;
    /*
    fetch(this.baseURL + '/api/accounts', {
      method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'content-type': 'application/json'
      }
    });
    */
    this.accounts[this.accounts.indexOf(e => e.id === account.id)] = account;
    return this.accounts[this.accounts.indexOf(e => e.id === account.id)];
  }
}

const accountService = new AccountService();

export default accountService;
