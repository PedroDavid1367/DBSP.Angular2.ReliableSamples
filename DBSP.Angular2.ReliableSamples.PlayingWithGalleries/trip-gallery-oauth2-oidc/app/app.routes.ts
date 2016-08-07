import { RouterConfig, provideRouter } from "@angular/router";
import { AppHomeComponent }            from "./home.feature/app-home.component";
import { NotFoundComponent }           from "./home.feature/not-found.component";
import { TripsHomeComponent }          from "./trips.feature/trips-home.component";
import { TripsHomegGuard }             from "./trips.feature/trips-home.guard";
import { CallbackComponent }           from "./home.feature/callback.component";
import { MaterializeHomeComponent }    from "./materialize-samples/materialize-home.component";

const APP_ROUTES: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    terminal: true
  },
  {
    path: 'home',
    component: AppHomeComponent
  },
  {
    path: 'trips',
    component: TripsHomeComponent,
    canActivate: [TripsHomegGuard]
  },
  {
    path: 'materialize-samples',
    component: MaterializeHomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  //{
  //  path: '**',
  //  redirectTo: '/home', // This should redirect to a help page.
  //},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];


