import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import leaflet from 'leaflet';
import { MarkersProvider } from "../../providers/markers/markers";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location: any = {titulo: null, longitude: 78.486671, latitude: 17.385044};
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

    }
    ionViewDidEnter() {
     this.loadmap();
   }

   loadmap() {
      this.map = leaflet.map("map").fitWorld();
      leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 38
      }).addTo(this.map);
      this.map.locate({
        setView: true,
        maxZoom: 20
      }).on('locationfound', (e) => {
        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
          alert('tu estas acá');
        })
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
        }).on('locationerror', (err) => {
          alert(err.message);
      })




      //var hydMarker = new leaflet.Marker([17.385044, 78.486671]);
      var vskpMarker = new leaflet.Marker([17.686816, 83.218482]);
      var vjwdMarker = new leaflet.Marker([16.506174, 80.648015]);



      // Creating layer group
      var cities = leaflet.layerGroup([vskpMarker, vjwdMarker]).addTo(this.map);
      // Adding layer group to map
      let geojson_url ="http://babel.webreactiva.com/labs/arboles_singulares_en_espacios_naturales.geojson"

      var geojsonFeature = {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [-104.99404, 39.75621]
      }
  };

  leaflet.geoJSON(geojsonFeature).addTo(this.map);
      fetch(geojson_url)
      .then(res => res.json())
      .then(data => {
        leaflet.geoJSON(data).addTo(this.map)
      })

    }
}
