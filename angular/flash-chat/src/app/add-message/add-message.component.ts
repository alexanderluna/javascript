import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  message: string;
  sender: string;

  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth
  ) {
    afAuth.auth.onAuthStateChanged(currentUser => {
      this.sender = currentUser.email;
    });
  }

  ngOnInit() {
  }

  onAddMessage() {
    let message_object = {
      MessageBody: this.message,
      Sender: this.sender
    }
    this.firebaseService.addMessage(message_object);
    this.message = '';
  }

}
