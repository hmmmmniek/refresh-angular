
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Navigate } from "src/app/services/store/router/router.action";
import { ButtonComponent } from "src/app/shared/widgets/button/button.widget.component";

@Component({
    selector: 'app_games-list',
    standalone: true,
    imports: [
        CommonModule,
        ButtonComponent
    ],
    templateUrl: 'games-list.feature.component.html',
    styleUrls: [ 'games-list.feature.component.scss' ]
})
export class GamesListComponent {
    constructor(public store: Store) {}

    goTo(path: string): void {
        this.store.dispatch(new Navigate(path, true));
    }
}
