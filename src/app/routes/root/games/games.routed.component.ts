import { Component } from "@angular/core";

@Component({
    selector: 'app_games_routed',
    template: `
        <router-outlet></router-outlet>
    `,
    styleUrls: []
})
export class GamesRoutedComponent {
    constructor() {}
}
