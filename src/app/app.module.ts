//import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { FormBuilder } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
//import { Globalization } from '@ionic-native/globalization';

@NgModule({
  declarations: [AppComponent, PerfilComponent ],
  entryComponents: [PerfilComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    //TranslateModule.forRoot() 
  ],
  providers: [
    FormBuilder,
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
    //Globalization,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
