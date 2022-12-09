import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app_how-to-play-wrapper',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: 'how-to-play-wrapper.widget.component.html',
    styleUrls: [ 'how-to-play-wrapper.widget.component.scss' ]
})
export class HowToPlayWrapperComponent {
    @Input() name: string = "";
    constructor() {}
}
