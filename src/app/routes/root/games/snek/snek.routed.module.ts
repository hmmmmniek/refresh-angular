import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameWrapperComponent } from 'src/app/shared/widgets/game-wrapper/game-wrapper.widget.component';
import { SnekRoutedComponent } from './snek.routed.component';
import { SnekRoutingModule } from './snek.routing.module';

@NgModule({
    declarations: [
        SnekRoutedComponent
    ],
    imports: [
        CommonModule,
        SnekRoutingModule,
        GameWrapperComponent
    ],
})
export class SnekRoutedModule {}
