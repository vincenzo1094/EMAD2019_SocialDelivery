import { Injectable } from '@angular/core';
import {Prodotto} from '../../interface/prodotto';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private prodottiCollection: AngularFirestoreCollection<Prodotto>;

  private cliente: Observable<Prodotto[]>;

  constructor(db: AngularFirestore) {
    this.prodottiCollection = db.collection<Prodotto>('prodotti');

    this.cliente = this.prodottiCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getProdotto(id){
    return this.prodottiCollection.doc<Prodotto>(id).valueChanges();
      
  }

  addProdotto(prodotto: Prodotto) {
    return this.prodottiCollection.add(prodotto);
  }
  
}
