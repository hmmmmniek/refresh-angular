
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app_snek-game',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: 'snek-game.feature.component.html',
    styleUrls: [ 'snek-game.feature.component.scss' ]
})
export class SnekGameComponent {
    constructor() {}
}
