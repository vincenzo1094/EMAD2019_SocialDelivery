
import { Router } from '@angular/router';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
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
  constructor(private geolocation: Geolocation, public navCtrl: NavController) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: -34.397,  lng: 150.644},
        zoom: 16,
        disableDefaultUI: true
      });

      /*location object*/
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      const pos2 = {
        lat: this.latitude + 0.001,
        lng: this.longitude + 0.001
      };
      // map.setMapTypeId('roadmap');
      map.setCenter(pos2);
      const icon = {
        url: 'assets/icon/d.png', // image url
        scaledSize: new google.maps.Size(70, 70), // scaled size
      };
      const icon2 = {
        url: 'assets/icon/u.png', // image url
        scaledSize: new google.maps.Size(70, 70), // scaled size
      };
      const marker = new google.maps.Marker({
        position: pos,
        map,
        title: 'Driver',
        icon
      });
      const marker2 = new google.maps.Marker({
        position: pos2,
        map,
        title: 'Ciao',
        icon: icon2
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  viewOrdini(){
    this.navCtrl.navigateRoot('/tabsCliente/ordini');
  }

  viewImpostazioni(){
    this.navCtrl.navigateRoot('/tabsCliente/impostazioni');
  }

  viewPreferiti(){
    this.navCtrl.navigateRoot('/tabsCliente/preferiti');
  }

  viewNegozi(){
    this.navCtrl.navigateRoot('/tabsCliente/negozi');
  }

}

