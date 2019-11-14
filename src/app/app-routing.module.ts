import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' , canActivate: [LoginGuard] },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' , canActivate: [AuthGuard] },
  { path: 'lembretes', loadChildren: './lembretes/lembretes.module#LembretesPageModule' , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
