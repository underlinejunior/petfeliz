import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent{
  @Input() id: string;
  @Input() nome: string;
  @Input() foto: string;
  @Input() idade: string;

  constructor(navParams: NavParams) {  }

}
