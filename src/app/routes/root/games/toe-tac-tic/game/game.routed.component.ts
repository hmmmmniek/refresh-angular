import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ToeTacTicGameComponent } from "../../../../../features/toe-tac-tic-game/toe-tac-tic-game.feature.component";

@Component({
    selector: 'app_toe-tac-tic-game_routed',
    standalone: true,
    template: `
        <app_toe-tac-tic-game></app_toe-tac-tic-game>
    `,
    styleUrls: [],
    imports: [
        CommonModule,
        ToeTacTicGameComponent
    ]
})
export class ToeTacTicGameRoutedComponent {
    constructor() {}
}
