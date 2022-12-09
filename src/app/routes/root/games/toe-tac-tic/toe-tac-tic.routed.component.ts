import { Component } from "@angular/core";

@Component({
    selector: 'app_toe-tac-tic',
    template: `
        <app_game-wrapper [name]="'Toe tac tic'">
            <router-outlet></router-outlet>    
        </app_game-wrapper>
    `,
    styleUrls: []
})
export class ToeTacTicRoutedComponent {
    constructor() {}
}
