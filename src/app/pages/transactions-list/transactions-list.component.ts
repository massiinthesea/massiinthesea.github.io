import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Transaction } from 'src/app/model/Transaction';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

  allTransactionsList: Transaction[] = [];
  listOfCurrentPageTransactions: readonly Transaction[] = [];
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  size;

  confirmModal?: NzModalRef;

  constructor(
    private localStorageService: LocalstorageService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.updateTransactionsListFromStockage();
  }


  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageTransactions.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Transaction[]): void {
    this.listOfCurrentPageTransactions = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageTransactions.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageTransactions.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  deleteTransaction(transactionId: number): void {
    const deleted = this.localStorageService.removeTransaction(transactionId);
    if (deleted) {
      this.updateTransactionsListFromStockage();
      this.nzMessageService.success('Transaction deleted');
    } else {
      this.nzMessageService.error('A problem happened, transaction has not been deleted');
    }
  }

  updateTransactionsListFromStockage(){
    this.allTransactionsList = this.localStorageService.getTransactions();
  }

}