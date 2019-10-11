import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage{
  photo: string = '';
 
  constructor(
    private navCtrl: NavController,
    private camera: Camera) {
    }
  
  private irParaPagina(pagina:string){
      this.navCtrl.navigateForward(pagina,);
  }
  irParaPaginaInicial(){
      this.irParaPagina("home");
  }

  takePicture() {
    this.photo = '';
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
  }

    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;

      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }
}