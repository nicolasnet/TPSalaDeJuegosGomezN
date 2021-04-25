import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private dbpath = '/mensajes'; //ruta de la coleccion de firebase.
  mensajesRef: AngularFirestoreCollection<Mensaje>;
  mensajes:Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.mensajesRef=db.collection<any>(this.dbpath, ref => ref.orderBy('hora'));
    this.mensajes=this.mensajesRef.valueChanges(this.dbpath);
  }


  getAll(){
    return this.mensajes;
  }

  create(mensaje: Mensaje): any{
    console.log("Entro a funcion create");
    return this.mensajesRef.add({...mensaje});
  }



  update(id: string, data: any): Promise<void> {
    return this.mensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.mensajesRef.doc(id).delete();
  }

}