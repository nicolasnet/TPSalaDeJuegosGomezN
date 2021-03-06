import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private dbpath = '/mensajes'; //ruta de la coleccion de firebase.
  mensajesRef: AngularFirestoreCollection<Mensaje>;

  constructor(private db: AngularFirestore) {
    this.mensajesRef = db.collection(this.dbpath);
  }

  getAll(): AngularFirestoreCollection<Mensaje>{
    return this.mensajesRef;
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
