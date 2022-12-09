import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SnekHowToPlayComponent } from "src/app/features/snek-how-to-play/snek-how-to-play.feature.component";

@Component({
    selector: 'app_snek-how-to-play_routed',
    standalone: true,
    template: `
        <app_snek-how-to-play></app_snek-how-to-play>
    `,
    styleUrls: [],
    imports: [
        CommonModule,
        SnekHowToPlayComponent
    ]
})
export class SnekHowToPlayRoutedComponent {
    constructor() {}
}
