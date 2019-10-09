import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordTypeInput = 'password';
  iconpassword = 'eye-off';
  authForm: FormGroup;
  configs = {
    cadastrar: true,
    action: 'Logar',
    actionChange: 'Cadastrar'
  };

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
  ) {
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
  changeAuthAction() {
    this.configs.cadastrar = !this.configs.cadastrar;
    const logar = this.configs;
    this.configs.action = logar ? 'Login' : 'Cadastre-se';
    this.configs.actionChange = logar ? 'Cadastrar' : 'Já Sou Cadastrado';
  }
  ngOnInit(): void {
    this.login();
  }
  private login(): void {
    this.authForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
    });
  }

  get name(): FormControl {
    return this.authForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.authForm.get('password') as FormControl;
  }
}
