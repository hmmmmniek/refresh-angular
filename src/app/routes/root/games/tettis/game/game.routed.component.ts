import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TettisGameComponent } from "../../../../../features/tettis-game/tettis-game.feature.component";

@Component({
    selector: 'app_tettis-game_routed',
    standalone: true,
    template: `
        <app_tettis-game></app_tettis-game>
    `,
    styleUrls: [],
    imports: [
        CommonModule,
        TettisGameComponent
    ]
})
export class TettisGameRoutedComponent {
    constructor() {}
}
