import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

export interface Item {
  date: string;
  hour: string;
  name: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private db: AngularFirestore, public authService: AuthService) {
    this.itemsCollection = this.db.collection<Item>('items');
  }

  ngOnInit() {
  }

  addItem(name: string, hour: string, date: string) {
    const item: Item = { date, hour, name };
    console.log(`${item.date} - ${item.hour} - ${item.name}`);
    this.itemsCollection.add(item);
  }

}
