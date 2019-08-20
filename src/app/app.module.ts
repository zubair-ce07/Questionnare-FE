import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessengerModule } from 'ngx-messenger';
import { DialogueBoxComponent } from './dialogue-box/dialogue-box.component';
import {MatListModule} from '@angular/material/list';
import { DialogueService } from './shared/dialogue.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DialogueBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessengerModule,
    MatListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [DialogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
