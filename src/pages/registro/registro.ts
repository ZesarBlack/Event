import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MarkersProvider } from "../../providers/markers/markers";
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

    location: any = {id: null, titulo: null, longitude: null, latitude: null, descripcion: null, fecha: null};

    @ViewChild('map') mapContainer: ElementRef;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public markersProvier: MarkersProvider, private geolocation: Geolocation) {
  }
  avisoOk()
  {
    const alert = this.alertCtrl.create({
      title: 'Localizado',
      subTitle: 'tu posicion está lista, puedes coninuar',
      buttons: ['continuar']
    });
    alert.present();
  }

  addMarker() {
    this.location.id = Date.now();
    this.markersProvier.saveMarker(this.location);
    //this.navCtrl.pop();
  }
  onLocateUser()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('has sido localizado');
       this.location.latitude =resp.coords.latitude;
       this.location.longitude =resp.coords.longitude;
    }).catch((error) => {
      console.log('error al localizar', error);
    });
  }

}
