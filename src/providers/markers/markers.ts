import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the MarkersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarkersProvider {
      //places={};

  constructor( private afDB: AngularFireDatabase) {
    console.log('Hello MarkersProvider Provider');
  }

  saveMarker(coords) {
    return  this.afDB.database.ref('notas/'+coords.id).set({
      longitude: coords.longitude,
      latitude: coords.latitude,
      titulo: coords.titulo,
      descripcion: coords.descripcion,
      fecha: coords.fecha
    });
  }

  getAllMarkers() {
    return this.afDB.list('notas').valueChanges();
  }

}
