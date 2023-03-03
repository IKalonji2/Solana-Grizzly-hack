import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoansComponent } from './pages/loans/loans.component';
import { MybidsComponent } from './pages/mybids/mybids.component';
import { PeerbidsComponent } from './pages/peerbids/peerbids.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    MybidsComponent,
    PeerbidsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
