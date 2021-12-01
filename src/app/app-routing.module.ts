import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { NoValidadoGuard } from './guards/no-validado.guard';
import { ValidadoGuard } from './guards/validado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[ValidadoGuard]
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule),
    canActivate:[NoValidadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoValidadoGuard]
  },
  {
    path: 'pass',
    loadChildren: () => import('./pages/pass/pass.module').then( m => m.PassPageModule),
    canActivate:[NoValidadoGuard]
  },
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then( m => m.ConductorPageModule),
    canActivate:[ValidadoGuard]
    
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pages/pasajero/pasajero.module').then( m => m.PasajeroPageModule),
    canActivate:[ValidadoGuard]
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./pages/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule),
    canActivate:[ValidadoGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
