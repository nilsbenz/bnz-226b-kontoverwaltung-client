class AccountService {

  private baseURL = 'http://localhost:8080';

  async login(user: object) {

    return await fetch(this.baseURL + '/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  async register(user: object) {
    return await fetch(this.baseURL + '/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  async getAccounts() {
    const res = await fetch(this.baseURL + '/api/accounts');
    return await res.json();
  }

  async getAccount(id: number) {
    const res = await fetch(this.baseURL + `/api/accounts/${id}`);
    return await res.json();
  }

  async createAccount(account: object) {
    await fetch(this.baseURL + '/api/accounts', {
      method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  async deleteAccount(id: number) {
    return await fetch(this.baseURL + `/api/accounts/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  async transaction(account: any, amount: number) {
    account.balance += amount;
    const res = await fetch(this.baseURL + '/api/accounts', {
      method: 'PUT',
      body: JSON.stringify(account),
      headers: {
        'content-type': 'application/json'
      }
    });
    return await res.json();
  }
}

const accountService = new AccountService();

export default accountService;
