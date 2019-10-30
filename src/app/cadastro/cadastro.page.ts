import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  photo: any;

  constructor(
    private navCtrl: NavController,
    private camera: Camera,
    private sn: DomSanitizer) {
    }

  private irParaPagina(pagina: string) {
      this.navCtrl.navigateForward(pagina, );
  }
  irParaPaginaInicial() {
      this.irParaPagina('home');
  }

  takePicture() {
    this.photo = '';
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
  };

    this.camera.getPicture(options).then((imageData) => {
      this.photo = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("Camera issue:" + err);
    });
  }
}

