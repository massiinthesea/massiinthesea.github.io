import { Injectable } from '@angular/core';
import { Transaction } from '../model/Transaction';
import { ThemeType } from './theme.service';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private readonly TRANSACTIONS_KEY: string = "TRANSACTIONS_KEY";
  private readonly THEME_KEY: string = "THEME_KEY";

  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  getTransactions(): Transaction[] {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(this.TRANSACTIONS_KEY));
    }
    return null;
  }

  saveTransaction(transaction: Transaction): boolean {
    let transactions: Transaction[] = this.getTransactions();
    if (!transactions || transactions === []) {
      transactions = [];
      transaction.id = 1;
    } else {
      transaction.id = Math.max.apply(Math, transactions.map(o => o.id)) + 1;
    }
    transactions.push(transaction);
    return this.saveTransactions(transactions)
  }

  saveTransactions(transactions: Transaction[]): boolean {
    if (this.isLocalStorageSupported) {
      if (!transactions || transactions.length < 1) {
        this.localStorage.removeItem(this.TRANSACTIONS_KEY);
      } else {
        this.localStorage.setItem(this.TRANSACTIONS_KEY, JSON.stringify(transactions));
      }
      return true;
    }
    return false;
  }


  removeTransaction(id: number): boolean {
    const transactions = this.getTransactions();
    if (transactions && transactions.length > 0) {
      var index = transactions.findIndex(transaction => transaction.id == id);
      if (index !== -1) {
        transactions.splice(index, 1);
        return this.saveTransactions(transactions)
      }
    }
    return false;
  }

  getTheme(): ThemeType {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(this.THEME_KEY));
    }
    return null;
  }

  setTheme(theme: ThemeType) {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(this.THEME_KEY, JSON.stringify(theme));
      return true;
    }
    return null;

  }
  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }
}
