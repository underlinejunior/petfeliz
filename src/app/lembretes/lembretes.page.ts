import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { listaPets } from '../home/listmodel';
import { PerfilComponent } from '../perfil/perfil.component';
import { Globalization } from '@ionic-native/globalization';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
})
export class LembretesPage implements OnInit {

  paginaAtiva = 'lembretes';

  pet: listaPets = { id: 1, nome: 'Zuma', idade: '1 ano e 9 meses', foto: './assets/avatar.png' };

  segmentChanged(ev: any) {
    this.paginaAtiva = ev.detail.value;
  }

  constructor(
    private navCtrl: NavController,
    private mdlCtrl: ModalController,
    private ppvCtrl: PopoverController,
    //private traduzir: Globalization,
  ) { }

  ngOnInit() {
  }

/*this.traduzir.getPreferredLanguage()
  .then(res => console.log(res))
  .catch(e => console.log(e));
  */
  private irParaPagina(pagina: string){
    this.navCtrl.navigateForward(pagina, );
}
  
irParaPaginaHome() {
    this.irParaPagina('home');
  }

deveExibirPaginaLembretes() {
    return this.deveExibirPagina('lembretes');
  }

deveExibirPaginaServicos() {
    return this.deveExibirPagina('servicos');
  }

deveExibirPaginaPetshops() {
    return this.deveExibirPagina('petshop');
  }

  private deveExibirPagina(pagina) {
    return this.paginaAtiva === pagina;
  }
  async exibirPerfil(pet: listaPets) {
    const popover = await this.ppvCtrl.create({
      component: PerfilComponent,
      componentProps: { id: 1, nome: 'Zuma', idade: '1 ano e 9 meses', foto: './assets/avatar.png'}
    });
    return await popover.present();
  }
}
