import { Injectable, OnDestroy } from '@angular/core';
import { SubscriptionRegistry } from './subscriptions-registry';

@Injectable()
export abstract class SubscriberService extends SubscriptionRegistry implements OnDestroy {
    ngOnDestroy(): void {
        this.unsubscribe();
    }
}
