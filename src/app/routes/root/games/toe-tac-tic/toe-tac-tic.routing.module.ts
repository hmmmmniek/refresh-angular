import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToeTacTicRoutedComponent } from './toe-tac-tic.routed.component';

const routes: Routes = [
  {
    path: '',
    component: ToeTacTicRoutedComponent,
    children: [
      {
        path: 'how-to-play',
        loadComponent: () => import('./how-to-play/how-to-play.routed.component').then(m => m.ToeTacTicHowToPlayRoutedComponent),
      },
      {
        path: 'game',
        loadComponent: () => import('./game/game.routed.component').then(m => m.ToeTacTicGameRoutedComponent),
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
export class ToeTacTicRoutingModule { }
