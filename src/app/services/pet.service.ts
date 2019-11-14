import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pet } from '../home/listmodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private petsCollection: AngularFirestoreCollection<Pet>;

  constructor(private afs: AngularFirestore) {
    this.petsCollection = this.afs.collection<Pet>('Pets');
  }

  getPets() {
    return this.petsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addPet(pet: Pet) {
    return this.petsCollection.add(pet);
  }

  getPet(id: string) {
    return this.petsCollection.doc<Pet>(id).valueChanges();
  }

  updatePet(id: string, pet: Pet) {
    return this.petsCollection.doc<Pet>(id).update(pet);
  }

  deletePet(id: string) {
    return this.petsCollection.doc(id).delete();
  }
}