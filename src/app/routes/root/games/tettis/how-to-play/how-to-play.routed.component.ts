import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TettisHowToPlayComponent } from "../../../../../features/tettis-how-to-play/tettis-how-to-play.feature.component";

@Component({
    selector: 'app_tettis-how-to-play_routed',
    standalone: true,
    template: `
        <app_tettis-how-to-play></app_tettis-how-to-play>
    `,
    styleUrls: [],
    imports: [
        CommonModule,
        TettisHowToPlayComponent
    ]
})
export class TettisHowToPlayRoutedComponent {
    constructor() {}
}
