import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitTransactionRoutingModule } from './submit-transaction-routing.module';
import { SubmitTransactionComponent } from './submit-transaction.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubmitTransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SubmitTransactionRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class SubmitTransactionModule { }
  