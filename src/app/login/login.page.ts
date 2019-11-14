import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from '../home/listmodel';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  passwordTypeInput = 'password';
  iconpassword = 'eye-off';
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  public confirma;
  public logado;
  
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,

  ) {
  }

  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'password' ? 'text' : 'password';
    this.iconpassword = this.iconpassword === 'eye-off' ? 'eye' : 'eye-off';
  }

  ngOnInit(): void {
  }

  segmentChanged(event) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  }
  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async register() {
    await this.presentLoading();

    try {
      if (this.userRegister.password === this.userRegister.passwordConfim) {
        await this.authService.register(this.userRegister);
        this.logado = 'cadastro realizado com sucesso!';
        this.confirma = ''; }
      else { this.confirma = 'senha não confere'; }
    } catch (error) {
      let message: string;

      switch(error.code){
        case 'auth/email-already-in-use':
          message="email já cadastrado!";
          break;
        case 'auth/invalid-email':
          message="email INVALIDO!";
          break;
        case 'auth/invalid-password':
          message="senha deve ter 6 caracteres ou mais!";
          break;
      }
      this.presentToast(message);

    } finally {
      this.loading.dismiss();
  ;
    }
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 5000 });
    toast.present();
  }
}
