import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {ClienteService} from 'src/app/services/cliente/cliente.service';
import {Cliente} from 'src/app/interface/cliente';
import {Driver} from 'src/app/interface/driver';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {

  constructor(private fireAuth: AngularFireAuth,public clienteService: ClienteService) { }


 

  registerNewUser(email: string, pass: string, cliente?: Cliente, driver?: Driver) {
     return this.fireAuth.auth.createUserWithEmailAndPassword(email, pass);
        
     
  }

  
  


}

