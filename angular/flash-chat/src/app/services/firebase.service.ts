import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  messages : FirebaseListObservable<any[]>;

  constructor(private db : AngularFireDatabase) { }

  getMessages() {
    this.messages = this.db.list('/Messages') as FirebaseListObservable<Message[]>;
    return this.messages;
  }
}

interface Message {
  $key?:string;
  Sender?:string;
  MessageBody?:string;
}
