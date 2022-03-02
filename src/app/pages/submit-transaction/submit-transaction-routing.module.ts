import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitTransactionComponent } from './submit-transaction.component';

const routes: Routes = [
  {
    path: "",
    component: SubmitTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitTransactionRoutingModule { }
