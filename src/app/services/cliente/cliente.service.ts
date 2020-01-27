import { Injectable } from '@angular/core';
import {Cliente} from '../../interface/cliente';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Ordine} from 'src/app/interface/ordine';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteCollection: AngularFirestoreCollection<Cliente>;
  private collection = null;

  private cliente: Observable<Cliente[]>;

  constructor(db: AngularFirestore) {
    
    this.clienteCollection = db.collection<Cliente>('clienti');
    this.collection = db.collection('clienti');
    this.cliente = this.clienteCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getClienti() {
    return this.clienteCollection.valueChanges();
  }

  getCliente(id) {
    return this.clienteCollection.doc<Cliente>(id).valueChanges();
  }

  updateCliente(cliente: Cliente, id: string) {
    this.clienteCollection.doc(id).update(cliente);
  }

  addCliente(cliente: Cliente) {
    this.clienteCollection.doc(cliente.email).set({
      nome: cliente.nome,
      citta: cliente.citta,
      indirizzo: cliente.indirizzo,
      ordini: cliente.ordini,
      cognome: cliente.cognome,
      preferiti: cliente.preferiti,
      avatar: cliente.avatar,
      email: cliente.email
    });
  }


  removeCliente(id) {
    return this.clienteCollection.doc(id).delete();
  }

  
}
