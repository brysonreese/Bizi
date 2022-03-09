import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [    

  {
  path: 'login',
  loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)   
},   

{
  path: 'tabs',
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)   
},      

{
  path : '',
  redirectTo : 'login',
  pathMatch : 'full'   
},   {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'new-request',
    loadChildren: () => import('./new-request/new-request.module').then( m => m.NewRequestPageModule)
  },
  {
    path: 'request-success',
    loadChildren: () => import('./request-success/request-success.module').then( m => m.RequestSuccessPageModule)
  },
  {
    path: 'coming-up',
    loadChildren: () => import('./coming-up/coming-up.module').then( m => m.ComingUpPageModule)
  },
  {
    path: 'completed-expenses',
    loadChildren: () => import('./completed-expenses/completed-expenses.module').then( m => m.CompletedExpensesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
