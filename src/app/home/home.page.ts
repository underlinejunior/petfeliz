import { Component } from '@angular/core';
import { listaPets } from './listmodel';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paginaAtiva: 'pets';
  pets: Array<listaPets> = [
    {id:1, nome:"Zuma", idade: "1 ano e 9 meses", foto:"./assets/avatar.png"},
    {id:2, nome:"Skye", idade: "1 ano e 5 meses", foto:"./assets/avatar.svg"}
  ];

    constructor(
    private navCtrl: NavController,
  ) {}
  
  private irParaPagina(pagina:string){
      this.navCtrl.navigateForward(pagina,);
  }
  irParaPaginaLembretes(){
      this.irParaPagina("lembretes");
  }
  irParaPaginaCadastro(){
      this.irParaPagina("cadastro");
  }
}
