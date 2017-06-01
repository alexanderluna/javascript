import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
@Injectable()
export class FirebaseService {
  item : FirebaseListObservable<any>;
  messages : FirebaseListObservable<any[]>;

  constructor(private db : AngularFireDatabase) {
      this.item = db.list('/Messages');
   }

  getMessages() {
    this.messages = this.db.list('/Messages') as FirebaseListObservable<Message[]>;
    return this.messages;
  }

  addMessage(message_object){
    this.item.push(message_object);
  }

  removeMessage(key: string) {
    this.item.remove(key);
  }
}

interface Message {
  $key?:string;
  Sender?:string;
  MessageBody?:string;
}
