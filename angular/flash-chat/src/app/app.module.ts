import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagesComponent } from './messages/messages.component';
import { AddMessageComponent } from './add-message/add-message.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'messages', component: MessagesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    NavbarComponent,
    MessagesComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
