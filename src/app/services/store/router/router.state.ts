import { Injectable, NgZone } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { withPatience } from 'src/app/utils';
import { SubscriberService } from 'src/app/utils/subscriber.service';
import { Navigate, SetPath } from './router.action';


export interface RouterStateModel {
    path: string;
}

@State<RouterStateModel>({
    name: 'router',
    defaults: {
        path: window.location.pathname
    },
})
@Injectable()
export class RouterState extends SubscriberService {


    constructor(private router: Router, private route: ActivatedRoute, private store: Store, private ngZone: NgZone) {
        super();

        this.watch(withPatience(
            this.router.events.pipe(
                filter((event) => event instanceof ActivationEnd && event.snapshot.children.length === 0),
            ),
            100,
        ), () => {
            let path = window.location.pathname;
            if (path.startsWith('/')) {
                path = path.substring(1);
            }
            this.store.dispatch(new SetPath(path));
        });
    }

    @Selector() static getPath(state: RouterStateModel) {
        return state.path;
    }

    @Action(Navigate)
    async changeRoute(context: StateContext<RouterStateModel>, action: Navigate) {

        let path = action.path;
        if (action.relativeToCurrentPath && action.path.charAt(0) === '/') {
            path = action.path.substring(1);
        }
        path = action.relativeToCurrentPath ? `${context.getState().path}/${path}` : action.path;

        let backMatch = path.match(/[^\/]*?\/\.\.\//);
        while (backMatch) {
            path = path.replace(/[^\/]*?\/\.\.\//, '');
            backMatch = path.match(/[^\/]*?\/\.\.\//);
        }
        context.patchState({
            path,
        });
        await this.ngZone.run(async () => {
            await this.router.navigate([path]);
        });
    }

    @Action(SetPath)
    async setPath(context: StateContext<RouterStateModel>, action: SetPath) {
        context.patchState({ path: action.path });
    }
 
}
