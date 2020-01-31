import { Component, OnInit } from '@angular/core';
import { PickerController,NavController } from '@ionic/angular';
import {ClienteService} from 'src/app/services/cliente/cliente.service';
import {Cliente} from 'src/app/interface/cliente';
import {RegistrazioneService} from 'src/app/services/registrazione/registrazione.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import {Driver} from 'src/app/interface/driver';
import {DriverService} from 'src/app/services/driver/driver.service';
import { NavExtrasService } from 'src/app/interface/NavExtraService';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private regService: RegistrazioneService,
              public alertController: AlertController,
              public loadingController: LoadingController,
              private clienteService: ClienteService,
              private driverService: DriverService,
              private navCtrl: NavController,
              private navExtra: NavExtrasService) {}

  tipoValue: string = "Cliente";
  message: string = '';
  email: string = '';
  password: string = '';
  citta: string = '';
  indirizzo: string = '';
  nome: string = '';
  cognome: string = '';

  ngOnInit() {
  }

  registerPressed() {
    console.log(this.tipoValue);
    
    let res = this.validateForm();
    console.log(res);
    if(res) {
      var cliente: Cliente = {
        nome: this.nome,
        cognome: this.cognome,
        citta: this.citta,
        indirizzo: this.indirizzo,
        email: this.email,
        ordini: null,
        preferiti: null,
        avatar:null
      }
      var driver: Driver = {
        nome: this.nome,
        cognome: this.cognome,
        citta: this.citta,
        indirizzo: this.indirizzo,
        email: this.email,
      }
      this.regService.registerNewUser(this.email, this.password)
        .then(() => {
          if(this.tipoValue == 'C') {
            this.clienteService.addCliente(cliente);
          }
          else{
            this.driverService.addDriver(driver);
          }
          this.presentAlert("Complimenti",'Registrazione avvenuta correttamente');
        })
        .catch((err) => {
          this.presentAlert("Error",err.message,);
        })
    }
    else{
      this.presentAlert("Attenzione","Riempi tutti i campi");
    }
  }


  async presentAlert(header:string,message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: '',
      message: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          if (message == 'Registrazione avvenuta correttamente') {
            if(this.tipoValue == 'C') {
              this.navExtra.setCliente(this.email);
              this.navCtrl.navigateForward('tabsCliente/negozi');
            }
            else {
              this.navExtra.setExtras(this.email);
              this.navCtrl.navigateForward('tabsDriver/spedizioni');
            }
          }
        }
      }]
    });

    await alert.present();
  }

  validateForm() {
    var result = true;
    if(this.nome == '' || this.cognome == '' || this.citta == '' || this.indirizzo == '' || this.email == '' || this.password == '') {
      result = false;
    }
    return result;
  }
  
  
  

}
