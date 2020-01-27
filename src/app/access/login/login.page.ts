
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import {Cliente} from './../../interface/cliente';
import {ClienteService} from './../../services/cliente/cliente.service';
import {Prodotto} from './../../interface/prodotto';
import { Mezzo } from 'src/app/interface/mezzo';
import {ProdottoService} from './../../services/prodotto/prodotto.service';
import {RegistrazioneService} from 'src/app/services/registrazione/registrazione.service';
import { NavExtrasService } from 'src/app/interface/NavExtraService';


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

  isClient = false;

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
    private prodService: ProdottoService,
    private regService: RegistrazioneService,
    public alertController: AlertController,
    private navExtra: NavExtrasService) { }

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
    this.regService.login(this.user.email,this.user.pw)
      .then(() => {
        this.serve.getClienti().subscribe(res => {
          res.forEach(element => {
            if(element.email == this.user.email) {
              // è un cliente
              this.navExtra.setCliente(this.user.email);
              this.navCtrl.navigateForward('tabsCliente/negozi');
              
            }
            else{
              //this.navCtrl.navigateForward('tabsDriver/spedizioni');
            }
          })
          //qui fuori dal for vuol dire che è un drive ma è asincrono quindi viene eseguito mentre il for è ancora attivo
        })
        
      })
      .catch((err) =>{
        this.presentAlert('Error',err.message);
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
}
