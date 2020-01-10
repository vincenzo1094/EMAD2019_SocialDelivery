import { Injectable } from '@angular/core';
import { Driver } from 'src/app/interface/driver';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Ordine} from 'src/app/interface/ordine';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private driverCollection: AngularFirestoreCollection<Driver>;

  private cliente: Observable<Driver[]>;

  constructor(db: AngularFirestore) {
    this.driverCollection = db.collection<Driver>('drivers');

    this.cliente = this.driverCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  addDriver(driver: Driver) {
    const a = this.driverCollection.add(driver);
    // tslint:disable-next-line: only-arrow-functions
    a.then( function(id) {
      console.log(id.id);
    });
    return a;
  }
}
