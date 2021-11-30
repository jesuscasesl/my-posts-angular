import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';

import { LoadingIntercepor } from './interceptos/loading.interceptor';

import { HeaderModule } from './components/shared/header/header.module';
import { SpinnerModule } from './components/shared/spinner/spinner.module';
import { MsgModule } from './components/shared/msg/msg.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    HeaderModule,
    SpinnerModule,
    MsgModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingIntercepor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
