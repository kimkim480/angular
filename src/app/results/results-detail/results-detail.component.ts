import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../auth.service';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Item {
  id: string;
  date: string;
  hour: string;
  name: string;
}

@Component({
  selector: 'app-results-detail',
  templateUrl: './results-detail.component.html'
})
export class ResultsDetailComponent implements OnInit {
  private itemCollection: AngularFirestoreCollection<Item>;
  private itemDoc: AngularFirestoreDocument<Item>;
  id: Item;
  itemObservable: Observable<Item>;
  item: Item;
  constructor(private db: AngularFirestore,
              private route: ActivatedRoute,
              public authService: AuthService) {
    this.itemCollection = this.db.collection<Item>('items');
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.itemDoc = this.db.doc<Item>(`items/${this.id}`);
    this.itemObservable = this.itemDoc.snapshotChanges().map((action) => {
      if (action.payload.exists) {
        return action.payload.data() as Item;
      } else {
        console.log(`Doc não existe`);
      }
    });
    this.itemObservable.subscribe((objeto) => {
      this.item = objeto;
    });
  } // Fim do ngOnInit

  update(item: any) {
    this.itemDoc.update(item);
    console.log(item);
  }
}
