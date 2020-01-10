
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import {Cliente} from './../../interface/cliente';
import {ClienteService} from './../../services/cliente/cliente.service';
import {Prodotto} from './../../interface/prodotto';
import { Mezzo } from 'src/app/interface/mezzo';
import {ProdottoService} from './../../services/prodotto/prodotto.service';

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

  /*negozi: Negozio[] = [
    {nome: 'Cartografia',
    id_esercente: '',
    p_iva: '',
    prodotti: [],
    id_indirizzo: ''},

    {nome: 'Ferramenta da Gino',
    id_esercente: '',
    p_iva: '',
    prodotti: [],
    id_indirizzo: ''},

    {nome: 'Acqua e Sapone',
    id_esercente: '',
    p_iva: '',
    prodotti: [],
    id_indirizzo: ''},

    {nome: 'Macelleria',
    id_esercente: '',
    p_iva: '',
    prodotti: [],
    id_indirizzo: ''},

    {nome: 'La cantinella',
    id_esercente: '',
    p_iva: '',
    prodotti: [],
    id_indirizzo: ''},

    {nome: 'Candy villa',
    id_esercente: '',
    p_iva: '',
    prodotti: [],
    id_indirizzo: ''},

    {nome: 'Frutta e verdura',
    id_esercente: '',
    p_iva: '',
    prodotti: [],
    id_indirizzo: ''},

    {nome: 'OFFICINA',
    id_esercente: '',
    p_iva: '',
    prodotti: [],
    id_indirizzo: ''}
  ];*/
  

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private serve: ClienteService,
    private prodService: ProdottoService ) { }

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
    this.navCtrl.navigateForward('/register');
  }

  goToHome() {
  // firebase.initializeApp(environment.firebase);
  /*const geo = GeoFire.init(firebase);
  this.negozi[0].id_indirizzo = geo.point(40.7709885, 14.7981127);
  this.negozi[1].id_indirizzo = geo.point(40.7710536, 14.797461);
  this.negozi[2].id_indirizzo = geo.point(40.7709146, 14.7982666);
  this.negozi[3].id_indirizzo = geo.point(40.7716727, 14.7969504);
  this.negozi[4].id_indirizzo = geo.point(40.6786549, 14.7579052);
  this.negozi[5].id_indirizzo = geo.point(40.6792604, 14.7529254);
  this.negozi[6].id_indirizzo = geo.point(40.6792401, 14.7525687);
  this.negozi[7].id_indirizzo = geo.point(40.6814556, 14.7659691);
  this.negozi.forEach(element => {
    this.service.addNegozio(element);
  });*/
  //this.serve.addCliente(this.cliente);




  this.auth.goToHome(this.user).subscribe(user => {

      const role = user.role;

      if (role === 'cliente') {
        

        this.navCtrl.navigateRoot('/tabsCliente/negozi');

      } else if (role === 'driver') {

        this.navCtrl.navigateRoot('/tabsDriver/spedizioni');

      } else if (role === 'esercente') {

        this.navCtrl.navigateRoot('/tabsEsercente/ordini');
      }
    });
  }

}
