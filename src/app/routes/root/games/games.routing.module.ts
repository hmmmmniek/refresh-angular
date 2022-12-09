import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesRoutedComponent } from './games.routed.component';

const routes: Routes = [
  {
    path: '',
    component: GamesRoutedComponent,
    children: [
      {
        path: 'toe-tac-tic',
        loadChildren: () => import('./toe-tac-tic/toe-tac-tic.routed.module').then(m => m.ToeTacTicRoutedModule),
      },
      {
        path: 'tettis',
        loadChildren: () => import('./tettis/tettis.routed.module').then(m => m.TettisRoutedModule),
      },
      {
        path: 'snek',
        loadChildren: () => import('./snek/snek.routed.module').then(m => m.SnekRoutedModule),
      },
      {
        path: '',
        loadComponent: () => import('./root/root.routed.component').then(m => m.GamesRootRoutedComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
