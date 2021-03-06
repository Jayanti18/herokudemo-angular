import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ContactComponent } from './herokus/contact/contact.component';
import { ContactDetailsComponent } from './herokus/contact-details/contact-details.component';
import { ContactListComponent } from './herokus/contact-list/contact-list.component';
import { HttpModule } from '@angular/http';
import { ContactService } from "./herokus/contact.service";

@NgModule({
  declarations: [
    AppComponent,
    // ContactComponent,
    ContactDetailsComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
