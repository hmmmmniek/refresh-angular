import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TettisRoutingModule } from "./tettis.routing.module";
import { GameWrapperComponent } from "src/app/shared/widgets/game-wrapper/game-wrapper.widget.component";

@Component({
    selector: 'app_tettis_routed',
    template: `
        <app_game-wrapper [name]="'Tettis'">
            <router-outlet></router-outlet>    
        </app_game-wrapper>
    `,
    styleUrls: []
})
export class TettisRoutedComponent {
    constructor() {}
}