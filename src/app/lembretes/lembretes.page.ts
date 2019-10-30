
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { listaPets, alertas, logoimg } from '../home/listmodel';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
})
export class LembretesPage implements OnInit {
  map: any;
  paginaAtiva = 'lembretes';

  pet: listaPets = { id: 1, nome: 'Zuma', idade: '1 ano e 9 meses', foto: './assets/avatar.png' };
  alert: Array<alertas> = [{titulo: logoimg.Vacina, aplicacao: new Date("2018-12-10"), validade: new Date("2019-12-10")},
                          { titulo: logoimg.Vermifulgo, aplicacao: new Date("2019-01-12"), validade: new Date("2020-01-12")},
                          { titulo: logoimg.Antipulga, aplicacao: new Date("2019-03-15"), validade: new Date("2020-03-15") }
]
  segmentChanged(ev: any) {
    this.paginaAtiva = ev.detail.value;
  }

  constructor(
    private navCtrl: NavController,
    private mdlCtrl: ModalController,
    private ppvCtrl: PopoverController,

  ) { }

  ngOnInit() {
  }

  private irParaPagina(pagina: string) {
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

  verificarTitulo(conteudo: alertas) {
    switch (conteudo.titulo) {
      case logoimg.Vacina:
        return './assets/icon/vacinas.svg';
      case logoimg.Antipulga:
        return './assets/icon/pulga.svg';
      case logoimg.Vermifulgo:
        return './assets/icon/vermifugo.svg';
      case logoimg.Tratamento:
        return './assets/icon/saude.svg';
    }
  }
}
