import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Store } from "@ngxs/store";
import { map, Observable } from "rxjs";
import { Navigate } from "src/app/services/store/router/router.action";
import { RouterState } from "src/app/services/store/router/router.state";
import { ButtonComponent } from "../button/button.widget.component";

@Component({
    selector: 'app_game-wrapper',
    standalone: true,
    imports: [
        CommonModule,
        ButtonComponent
    ],
    templateUrl: 'game-wrapper.widget.component.html',
    styleUrls: [ 'game-wrapper.widget.component.scss' ]
})
export class GameWrapperComponent {
    @Input() name: string = "";
    isInGame$: Observable<boolean>;
    constructor(public store: Store) {
        this.isInGame$ = store.select(RouterState.getPath).pipe(map((path) => !path.includes('how-to-play')))

    }

    goTo(path: string): void {
        this.store.dispatch(new Navigate(path, true));
    }

}
