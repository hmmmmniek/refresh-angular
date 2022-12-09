import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ToeTacTicHowToPlayComponent } from "../../../../../features/toe-tac-tic-how-to-play/toe-tac-tic-how-to-play.feature.component";

@Component({
    selector: 'app_toe-tac-tic-how-to-play_routed',
    standalone: true,
    template: `
        <app_toe-tac-tic-how-to-play></app_toe-tac-tic-how-to-play>
    `,
    styleUrls: [],
    imports: [
        CommonModule,
        ToeTacTicHowToPlayComponent
    ]
})
export class ToeTacTicHowToPlayRoutedComponent {
    constructor() {}
}
