import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnekRoutedComponent } from './snek.routed.component';

const routes: Routes = [
  {
    path: '',
    component: SnekRoutedComponent,
    children: [
      {
        path: 'how-to-play',
        loadComponent: () => import('./how-to-play/how-to-play.routed.component').then(m => m.SnekHowToPlayRoutedComponent),
      },
      {
        path: 'game',
        loadComponent: () => import('./game/game.routed.component').then(m => m.SnekGameRoutedComponent),
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
export class SnekRoutingModule { }
