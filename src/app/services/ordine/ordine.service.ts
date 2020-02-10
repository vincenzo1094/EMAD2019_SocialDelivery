import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ordine } from 'src/app/interface/ordine';

@Injectable({
  providedIn: 'root'
})


export class OrdineService {
  
  private ordiniCollection: AngularFirestoreCollection<Ordine>;
  
  private ordine: Observable<Ordine[]>;


  constructor(private db: AngularFirestore) {
    this.ordiniCollection = db.collection<Ordine>('ordini');

    this.ordine = this.ordiniCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getOrdini(){
    return this.ordine;
  }

  getOrdiniAttesa(){
    let ordiniInAttesaCollection: AngularFirestoreCollection<Ordine>;
    let ordiniInAttesa: Observable<Ordine[]>;
    ordiniInAttesaCollection = this.db.collection<Ordine>('ordini', ref=> ref.where('stato', '==', 2));

    ordiniInAttesa = ordiniInAttesaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return ordiniInAttesa;
  }

  updateOrdine(ordine: Ordine, id: string) {
    this.ordiniCollection.doc(id).update(ordine);
  }

  updateStato(stato: number, id: string) {
    this.ordiniCollection.doc(id).update({stato: stato});
  }

  getOrdine(id){
    return this.ordiniCollection.doc<Ordine>(id).valueChanges();   
  }


  addOrdine(ordine: Ordine) {
    return this.ordiniCollection.add(ordine);
  }
}