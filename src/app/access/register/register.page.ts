import { Component, OnInit } from '@angular/core';
import { PickerController,NavController } from '@ionic/angular';
import {ClienteService} from 'src/app/services/cliente/cliente.service';
import {Cliente} from 'src/app/interface/cliente';
import {RegistrazioneService} from 'src/app/services/registrazione/registrazione.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import {Driver} from 'src/app/interface/driver';
import {DriverService} from 'src/app/services/driver/driver.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private regService: RegistrazioneService,public alertController: AlertController, public loadingController: LoadingController,private clienteService: ClienteService,private driverService: DriverService,private navCtrl: NavController) {}

  tipoValue: string = "Cliente";
  message: string = '';

  ngOnInit() {
  }

  tipoPressed() {
    if(this.tipoValue == "Cliente") {
      this.tipoValue = "Driver";
    }
    else {this.tipoValue = "Cliente";}
  }
  
  

  registerPressed() {
    
    let tipoAcc = this.tipoValue;
    let nome = (<HTMLInputElement>document.getElementById('nome')).value;
    let cognome = (<HTMLInputElement>document.getElementById('cognome')).value;
    let citta = (<HTMLInputElement>document.getElementById('citta')).value;
    let indirizzo  = (<HTMLInputElement>document.getElementById('indirizzo')).value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let pass = (<HTMLInputElement>document.getElementById('password')).value;
    let res = this.validateForm(nome,cognome,citta,indirizzo,email,pass);
    var cliente: Cliente = {
      nome: nome,
      cognome: cognome,
      citta: citta,
      indirizzo: indirizzo,
      email: email,
    }
    var driver: Driver = {
      nome: nome,
      cognome: cognome,
      citta: citta,
      indirizzo: indirizzo,
      email: email,
    }
    
    this.regService.registerNewUser(email,pass)
      .then(() => {
        if(tipoAcc == 'Cliente') {
          this.clienteService.addCliente(cliente);
        }
        else{
          this.driverService.addDriver(driver);
        }
        this.presentAlert("Complimenti",'Registrazione avvenuta correttamente');
      })
      .catch((err) => {
        this.presentAlert("Error",err.message);
      })
      
  }


  async presentAlert(header:string,message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: '',
      message: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          if(message == 'Registrazione avvenuta correttamente') {
            this.navCtrl.navigateForward('tabsCliente/negozi');
          }
        }
      }]
    });

    await alert.present();
  }

  validateForm(nome: string, cog: string, citta: string, indirizzo: string, email: string, pass: string) {
    var result = true;
    if(nome == '' || cog == '' || citta == '' || indirizzo == '' || email == '' || pass == '') {
      result = false;
    }
    return result;
  }
  
  
  

}
