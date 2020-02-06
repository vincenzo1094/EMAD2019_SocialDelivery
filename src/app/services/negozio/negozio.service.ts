import { Injectable } from '@angular/core';
import {Negozio} from '../../interface/negozio';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as GeoFire from 'geofirex';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class NegozioService {

  private negozioCollection: AngularFirestoreCollection<Negozio>;

  private negozio: Observable<Negozio[]>;



  constructor(db: AngularFirestore, ) {

    this.negozioCollection = db.collection<Negozio>('negozi');

    this.negozio = this.negozioCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getNegozi() {
    return this.negozio;
  }

  getNegozio(id) {
    return this.negozioCollection.doc<Negozio>(id).valueChanges();
  }

  getGeoQueryNegozi(lan: number, lon: number) {
    const geo = GeoFire.init(firebase);
    const center = geo.point(lan, lon);
    const radius = 30000000000000000000000;
    const field = 'id_indirizzo';

    const query = geo.query('negozi').within(center, radius, field);
    return query;
  }

  updateNegozio(negozio: Negozio, id: string) {
    return this.negozioCollection.doc(id).update(negozio);
  }



  addNegozio(negozio: Negozio) {
    return this.negozioCollection.add(negozio);

  }

  removeNegozio(id) {
    return this.negozioCollection.doc(id).delete();
  }
}
