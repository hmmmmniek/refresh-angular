import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SnekGameComponent } from "src/app/features/snek-game/snek-game.feature.component";

@Component({
    selector: 'app_snek-game_routed',
    standalone: true,
    template: `
        <app_snek-game></app_snek-game>
    `,
    styleUrls: [],
    imports: [
        CommonModule,
        SnekGameComponent
    ]
})
export class SnekGameRoutedComponent {
    constructor() {}
}
