import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NegozioService} from './../../../services/negozio/negozio.service';
declare var google;

@Component({
  selector: 'app-negozi',
  templateUrl: './negozi.page.html',
  styleUrls: ['./negozi.page.scss'],
})
export class NegoziPage implements OnInit, AfterViewInit {
  latitude: any;
  longitude: any;


  addr = {
    lat: '',
    lon: ''
  };

  @ViewChild('mapElement', {static: true}) mapNativeElement: ElementRef;
  constructor(private geolocation: Geolocation,
              public navCtrl: NavController,
              private serveNegozi: NegozioService,
              private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: -34.397,  lng: 150.644},
        zoom: 16,
        //disableDefaultUI: true
      });

      /*location object*/
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      map.setCenter(pos);

      const icon = {
        url: 'assets/icon/u.png', // image url
        scaledSize: new google.maps.Size(40, 40), // scaled size
      };

      const marker = new google.maps.Marker({
        position: pos,
        map,
        title: 'User',
        icon
      });


      this.serveNegozi.getGeoQueryNegozi(this.latitude, this.longitude).subscribe(res =>
        res.forEach(element => {
          console.log(element);
          // tslint:disable-next-line: no-shadowed-variable
          const pos = {
            // tslint:disable-next-line: no-string-literal
            lat: element['id_indirizzo'].geopoint.latitude,
            // tslint:disable-next-line: no-string-literal
            lng: element['id_indirizzo'].geopoint.longitude
          };

          // tslint:disable-next-line: no-shadowed-variable
          const icon = {
            url: 'assets/icon/s.png', // image url
            scaledSize: new google.maps.Size(40, 40), // scaled size
          };

          // tslint:disable-next-line: no-shadowed-variable
          const marker = new google.maps.Marker({
            position: pos,
            map,
            title: 'Shop',
            icon
          });
          marker.addListener('click', () => {
            const navigationExtras: NavigationExtras = {
              queryParams: {
                  prodotti: element['prodotti']
              }
          };
          this.router.navigate(['tabsCliente/prodotti'], navigationExtras);
          });
        }));

      //map.setMapTypeId('roadmap');
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }


  viewOrdini() {
    this.navCtrl.navigateRoot('/tabsCliente/prodotti');
  }

  viewNegozi() {}

  viewImpostazioni() {
    this.navCtrl.navigateRoot('/tabsCliente/impostazioni');
  }

  viewPreferiti() {
    this.navCtrl.navigateRoot('/tabsCliente/preferiti');
  }

}

