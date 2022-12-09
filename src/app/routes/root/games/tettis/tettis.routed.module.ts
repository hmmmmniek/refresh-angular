import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameWrapperComponent } from 'src/app/shared/widgets/game-wrapper/game-wrapper.widget.component';
import { TettisRoutedComponent } from './tettis.routed.component';
import { TettisRoutingModule } from './tettis.routing.module';

@NgModule({
    declarations: [
        TettisRoutedComponent
    ],
    imports: [
        CommonModule,
        TettisRoutingModule,
        GameWrapperComponent
    ],
})
export class TettisRoutedModule {}
