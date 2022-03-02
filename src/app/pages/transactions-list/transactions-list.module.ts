import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsListRoutingModule } from './transactions-list-routing.module';
import { TransactionsListComponent } from './transactions-list.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

@NgModule({
  declarations: [
    TransactionsListComponent
  ],
  imports: [
    CommonModule,
    TransactionsListRoutingModule,
    DemoNgZorroAntdModule

  ]
})
export class TransactionsListModule { }
