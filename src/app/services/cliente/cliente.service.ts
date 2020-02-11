import { Injectable } from '@angular/core';
import {Cliente} from '../../interface/cliente';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Ordine} from 'src/app/interface/ordine';
import { Platform } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteCollection: AngularFirestoreCollection<Cliente>;
  private collection = null;

  private cliente: Observable<Cliente[]>;

  constructor(db: AngularFirestore,
              private firebase: Firebase,
              private platform: Platform) {
    
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

  async addCliente(cliente: Cliente) {
    
    if (this.platform.is('android')) {
      cliente.token = await this.firebase.getToken();
    }
    
    this.clienteCollection.doc(cliente.email).set(cliente);
  }


  updateStato(idCliente: string, idOrdine: string, stato: number) {
    this.clienteCollection.doc<Cliente>(idCliente).valueChanges().subscribe(res =>{
      for(let or of res.ordini) {
        if(or.id == idOrdine) {
          or.stato = stato;
        }
      }
      for(let or of res.ordini) {
        console.log(or.stato);
      }
      this.updateOrdini(idCliente,res.ordini);
    });
  }
  
  updateOrdini(idCliente: string, ordini: Ordine[]) {
    this.clienteCollection.doc(idCliente).update({ordini: ordini});
  }
  removeCliente(id) {
    return this.clienteCollection.doc(id).delete();
  }

  
}
