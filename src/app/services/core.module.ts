import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../../environments/environment-variables';
import { RouterState } from './store/router/router.state';

@NgModule({
    imports: [
        NgxsModule.forRoot(
            [
                RouterState
            ],
            {
                developmentMode: !environment.production
            }
        )
    ],
})
export class CoreModule {}
