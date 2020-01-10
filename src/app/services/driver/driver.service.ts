import { Injectable } from '@angular/core';
import { Driver } from 'src/app/interface/driver';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private driverCollection: AngularFirestoreCollection<Driver>;

  private cliente: Observable<Driver[]>;

  constructor(private db: AngularFirestore,
              private firebase: Firebase,
              private platform: Platform) {
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

    if (this.platform.is('android')) {
      driver.token = this.firebase.getToken();
    }

    if (this.platform.is('ios')) {
      driver.token = this.firebase.getToken();
      this.firebase.grantPermission();
    }
    if (this.platform.is('desktop')) {
      driver.token = 'desktop';
    }
    const a = this.driverCollection.add(driver);
    // tslint:disable-next-line: only-arrow-functions
    a.then( function(id) {
      console.log(id.id);
    });
    return a;
  }

  onNotifications() {
    return this.firebase.onNotificationOpen();
  }
  
}
