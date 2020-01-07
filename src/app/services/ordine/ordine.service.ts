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

  constructor(db: AngularFirestore) {
    this.ordiniCollection = db.collection<Ordine>('ordini');
  }

  getOrdine(id){
    return this.ordiniCollection.doc<Ordine>(id).valueChanges();   
  }

  getOrdiniOf(cliente) {
    // DAMMI TUTTI GLI ORDINI DEL CLIENTE
    //TUTTI GLI ORDINI WHERE CLIENTE = cliente (variabile in input al metodo)
    
    
  }

  addOrdine(ordine: Ordine) {
    return this.ordiniCollection.add(ordine);
  }
}