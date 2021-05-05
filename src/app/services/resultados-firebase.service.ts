import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Resultado } from '../clases/resultado';

@Injectable({
  providedIn: 'root'
})
export class ResultadosFirebaseService {

  private dbpath = '/resultados'; //ruta de la coleccion de firebase.
  resultadosRef: AngularFirestoreCollection<Resultado>;
  resultados:Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.resultadosRef=db.collection(this.dbpath);
    this.resultados=this.resultadosRef.valueChanges(this.dbpath);
  }


  getAll(){
    return this.resultados;
  }

  create(resultado: Resultado): any{
    console.log("Entro a funcion createeeeeeeee");
    return this.resultadosRef.add({...resultado});
  }


  update(id: string, data: any): Promise<void> {
    return this.resultadosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.resultadosRef.doc(id).delete();
  }
}
