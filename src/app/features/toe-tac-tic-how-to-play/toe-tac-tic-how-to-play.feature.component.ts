
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { HowToPlayWrapperComponent } from "src/app/shared/widgets/how-to-play-wrapper/how-to-play-wrapper.widget.component";

@Component({
    selector: 'app_toe-tac-tic-how-to-play',
    standalone: true,
    templateUrl: 'toe-tac-tic-how-to-play.feature.component.html',
    styleUrls: ['toe-tac-tic-how-to-play.feature.component.scss'],
    imports: [
        CommonModule,
        HowToPlayWrapperComponent
    ]
})
export class ToeTacTicHowToPlayComponent {
    constructor() {}
}
