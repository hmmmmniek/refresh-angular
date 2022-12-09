
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app_tettis-game',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: 'tettis-game.feature.component.html',
    styleUrls: [ 'tettis-game.feature.component.scss' ]
})
export class TettisGameComponent {
    constructor() {}
}
