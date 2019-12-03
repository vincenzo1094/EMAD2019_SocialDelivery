import { Injectable } from '@angular/core';
import {Cliente} from '../../interface/cliente';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteCollection: AngularFirestoreCollection<Cliente>;

  private cliente: Observable<Cliente[]>;

  constructor(db: AngularFirestore) {
    this.clienteCollection = db.collection<Cliente>('clienti');

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
    return this.cliente;
  }

  getCliente(id) {
    return this.clienteCollection.doc<Cliente>(id).valueChanges();
  }

  updateCliente(cliente: Cliente, id: string) {
    return this.clienteCollection.doc(id).update(cliente);
  }

  addCliente(cliente: Cliente) {
    return this.clienteCollection.add(cliente);
  }

  removeCliente(id) {
    return this.clienteCollection.doc(id).delete();
  }
}
