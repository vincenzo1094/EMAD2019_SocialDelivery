
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import * as GeoFire from 'geofirex';
import * as firebase from 'firebase/app';
import { environment } from './../../../environments/environment';
import { Negozio} from './../../interface/negozio';
import {NegozioService} from './../../services/negozio/negozio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;

  user = {
    email: '',
    pw: '',

  };

  negozio: Negozio = {
    nome: 'nome',
    id_esercente: 'prova',
    p_iva: 'prova',
    prodotti: [],
    id_indirizzo: 'prova'
  };

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private service: NegozioService ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.required
      ])],
      password: [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {
  // firebase.initializeApp(environment.firebase);
  const geo = GeoFire.init(firebase);
  this.negozio.id_indirizzo = geo.point(40.807904, 14.621987);
  this.service.addNegozio(this.negozio);


  this.auth.goToHome(this.user).subscribe(user => {

      const role = user.role;

      if (role === 'cliente') {
        this.navCtrl.navigateRoot('/tabsCliente');

      } else if (role === 'driver') {

        this.navCtrl.navigateRoot('/tabsDriver');

      } else if (role === 'esercente') {

        this.navCtrl.navigateRoot('/tabsEsercente');
      }
    });
  }

}
