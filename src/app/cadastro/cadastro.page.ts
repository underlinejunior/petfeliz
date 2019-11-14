import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pet } from '../home/listmodel';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  private petId: string = null;
  public pet: Pet = {};
  private loading: any;
  private petSubscription: Subscription;

  constructor(
    private petService: PetService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
    ) {
    this.petId = this.activatedRoute.snapshot.params['id'];
    if (this.petId) this.loadPet();
  }
  ngOnInit() { }


  loadPet() {
    this.petSubscription = this.petService.getPet(this.petId).subscribe(data => {
      this.pet = data;
    });
  }

  async savePet() {
    await this.presentLoading();

    this.pet.userId = this.authService.getAuth().currentUser.uid;

    if (this.petId) {
      try {
        await this.petService.updatePet(this.petId, this.pet);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      this.pet.createdAt = new Date().getTime();

      try {
        await this.petService.addPet(this.pet);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}