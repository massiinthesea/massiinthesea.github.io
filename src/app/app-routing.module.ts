import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'new-transaction',
    loadChildren: () => import('./pages/submit-transaction/submit-transaction.module')
      .then(m => m.SubmitTransactionModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./pages/transactions-list/transactions-list.module')
      .then(m => m.TransactionsListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
