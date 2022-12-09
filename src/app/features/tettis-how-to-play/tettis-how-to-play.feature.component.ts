
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { HowToPlayWrapperComponent } from "src/app/shared/widgets/how-to-play-wrapper/how-to-play-wrapper.widget.component";

@Component({
    selector: 'app_tettis-how-to-play',
    standalone: true,
    templateUrl: 'tettis-how-to-play.feature.component.html',
    styleUrls: ['tettis-how-to-play.feature.component.scss'],
    imports: [
        CommonModule,
        HowToPlayWrapperComponent
    ]
})
export class TettisHowToPlayComponent {
    constructor() {}
}
