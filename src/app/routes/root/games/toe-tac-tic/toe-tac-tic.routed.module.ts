import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameWrapperComponent } from 'src/app/shared/widgets/game-wrapper/game-wrapper.widget.component';
import { ToeTacTicRoutedComponent } from './toe-tac-tic.routed.component';
import { ToeTacTicRoutingModule } from './toe-tac-tic.routing.module';

@NgModule({
    declarations: [
        ToeTacTicRoutedComponent
    ],
    imports: [
        CommonModule,
        ToeTacTicRoutingModule,
        GameWrapperComponent
    ],
})
export class ToeTacTicRoutedModule {}
