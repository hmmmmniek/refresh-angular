
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HowToPlayWrapperComponent } from "src/app/shared/widgets/how-to-play-wrapper/how-to-play-wrapper.widget.component";

@Component({
    selector: 'app_snek-how-to-play',
    standalone: true,
    templateUrl: 'snek-how-to-play.feature.component.html',
    styleUrls: ['snek-how-to-play.feature.component.scss'],
    imports: [
        CommonModule,
        HowToPlayWrapperComponent
    ]
})
export class SnekHowToPlayComponent {
    constructor() {}
}
