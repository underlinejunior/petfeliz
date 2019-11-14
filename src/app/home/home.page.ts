import { PetService } from '../services/pet.service';
import { Component } from '@angular/core';
import { Pet } from './listmodel';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private loading: any;
  public pets = new Array<Pet>();
  private petsSubscription: Subscription;

  paginaAtiva: 'pets';


  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private petService: PetService,
    private navCtrl: NavController
  ) {
    this.petsSubscription = this.petService.getPets().subscribe(data => {
      this.pets = data;
    });
  }

  async presentLoading() {
      this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
      return this.loading.present();
    }

  async deletePet(id: string) {
    try {
      await this.petService.deletePet(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
  irParaPaginaCadastro(cadastro) {
    this.navCtrl.navigateForward('cadastro');
  }
}
