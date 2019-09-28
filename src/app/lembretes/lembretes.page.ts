import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { listaPets } from '../home/listmodel';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
})
export class LembretesPage implements OnInit {

  paginaAtiva='lembretes';

  pet: listaPets = { id: 1, nome: 'Zuma', idade: '1 ano e 9 meses', foto: './assets/avatar.png' };

  segmentChanged(ev: any) {
    this.paginaAtiva = ev.detail.value;
  }

  constructor(
    private navCtrl: NavController,
    private mdlCtrl: ModalController,
    private ppvCtrl: PopoverController
  ) { }

  ngOnInit() {
  }
  
  private irParaPagina(pagina:string){
    this.navCtrl.navigateForward(pagina,);
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
      event : pet,
      componentProps: { id: 1, nome: 'Zuma', idade: '1 ano e 9 meses', foto: './assets/avatar.png'}
    });
    return await popover.present();
  }
}
