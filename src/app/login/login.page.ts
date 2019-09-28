import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  passwordTypeInput = 'password';
  iconpassword = 'eye-off';

constructor( private navCtrl: NavController, ) {

   }
togglePasswordMode() {
  this.passwordTypeInput = this.passwordTypeInput === 'password' ? 'text' : 'password';
  this.iconpassword = this.iconpassword === 'eye-off' ? 'eye' : 'eye-off';
}
private irParaPagina(pagina) {
  this.navCtrl.navigateForward(pagina);
}
  irParaPaginaHome() {
    this.irParaPagina('home');

  }
}
