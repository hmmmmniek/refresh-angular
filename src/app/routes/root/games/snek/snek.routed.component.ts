import { Component } from "@angular/core";

@Component({
    selector: 'app_snek_routed',
    template: `
        <app_game-wrapper [name]="'Snek'">
            <router-outlet></router-outlet>    
        </app_game-wrapper>
    `,
    styleUrls: []
})
export class SnekRoutedComponent {
    constructor() {}
}