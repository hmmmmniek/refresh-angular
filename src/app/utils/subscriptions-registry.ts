import { Observable, Subscription } from 'rxjs';

/* it seems that 'subscription-registry' is a reserved file name or so,
 ** therefore named this file 'subscriptions-registry'
 */

export type ObservableExpression<T> = Observable<T> | T | Promise<T>;

function isObservable<T>(value: unknown): value is Observable<T> {
    return !!value && !!(value as Observable<unknown>).subscribe;
}
function isPromise<T>(value: unknown): value is Promise<T> {
    return !!value && !!(value as Promise<unknown>).then;
}

export abstract class SubscriptionRegistry {
    private _subscriptions: Subscription[] = [];

    protected unsubscribe() {
        this._subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
        this._subscriptions = [];

    }

    protected async watch<T>(input: ObservableExpression<T>, callback: (value: T) => void) {
        if (isObservable(input)) {
            if (!callback) {
                throw Error('Must provide callback!');
            }
            this._subscriptions.push(input.subscribe(callback));
        } else if (isPromise(input)) {
            if (!callback) {
                throw Error('Must provide callback!');
            }
            callback(await input);
        } else {
            if (!callback) {
                throw Error('Must provide callback!');
            }
            callback(<T>input);
        }
    }

}
