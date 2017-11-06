import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { AuthService } from '../auth.service';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface Item {
  date: string;
  hour: string;
  name: string;
}

export interface ItemId extends Item { id: string; }

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  private itemCollection: AngularFirestoreCollection<ItemId>;
  itemId: Observable<ItemId[]>;
  items: ItemId[];
  private itemDoc: AngularFirestoreDocument<ItemId>;

  constructor(private db: AngularFirestore, public authService: AuthService) {
    this.itemCollection = this.db.collection<ItemId>('items');
  }

  ngOnInit() {
    this.itemId = this.itemCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ItemId;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });

    this.itemId.subscribe((objeto) => {
      this.items = objeto;
    });
  } // End of ngOnInit()

  remove(id: string) {
    this.itemDoc = this.db.doc(`items/${id}`);
    this.itemDoc.delete();
  }


} // End of ResultsComponent

