import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import fr from '@angular/common/locales/fr';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { AppInitializerProvider } from './services/app-initializer.service';
registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoNgZorroAntdModule,
    
  ],
  providers: [AppInitializerProvider, { provide: NZ_I18N, useValue: fr_FR }], // TODO: Gérer langue plus icones ng zorro ?
  bootstrap: [AppComponent]
})
export class AppModule { }
