import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TettisRoutedComponent } from './tettis.routed.component';

const routes: Routes = [
  {
    path: '',
    component: TettisRoutedComponent,
    children: [
      {
        path: 'how-to-play',
        loadComponent: () => import('./how-to-play/how-to-play.routed.component').then(m => m.TettisHowToPlayRoutedComponent),
      },
      {
        path: 'game',
        loadComponent: () => import('./game/game.routed.component').then(m => m.TettisGameRoutedComponent),
      },
      {
        path: '**',
        redirectTo: 'game'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TettisRoutingModule { }
