import { Component, OnDestroy } from '@angular/core';
import { SubscriptionRegistry } from './subscriptions-registry';

@Component({
    template: '',
})
export abstract class SubscriberComponent extends SubscriptionRegistry implements OnDestroy {
    ngOnDestroy(): void {
        this.unsubscribe();
    }
}
