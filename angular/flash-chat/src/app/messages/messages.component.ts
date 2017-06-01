import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages:any;
  currentUser:any;

  constructor(private firebaseService: FirebaseService, public afAuth: AngularFireAuth) {
    afAuth.auth.onAuthStateChanged(currentUser => {
      this.currentUser = currentUser.email;
    })
   }

  ngOnInit() {
    this.firebaseService.getMessages().subscribe(messages => {
      console.log(messages);
      this.messages = messages;
    });
  }

  getClass(user){
    if (this.currentUser == user) {
      return "panel panel-info"
    } else {
      return "panel panel-success"
    }
  }

  onDeleteClick(message) {
    if (message.Sender == this.currentUser) {
      this.firebaseService.removeMessage(message.$key);
      console.log("Deleted");
    } else {
      console.log("Not authorized");
    }
  }

}
