import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Storage} from '@ionic/storage';

const TOKEN_KEY = 'user-access-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>;
  private authState = new BehaviorSubject(null);

  constructor(private storage: Storage) {
    this.user = this.authState.asObservable();

   }

  goToHome(credentials): Observable<any> {

    let email = credentials.email;
    let pw = credentials.pw;
    let user = null;

    if (email === 'esercente' && pw === 'password') {

      user = {email, role: 'esercente'};
    } else if (email === 'driver' && pw === 'password') {

      user = {email, role: 'driver'};
    } else if (email === 'cliente' && pw === 'password') {

      user = {email, role: 'cliente'};
    }

    this.authState.next(user);

    this.storage.set(TOKEN_KEY, user);

    return of(user);
  }
}
