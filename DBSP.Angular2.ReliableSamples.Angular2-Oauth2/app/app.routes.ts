import { RouterConfig, provideRouter } from "@angular/router";
import { AppHomeComponent }            from "./home.feature/app-home.component";
import { NotFoundComponent }           from "./home.feature/not-found.component";
import { TripsHomeComponent }          from "./trips.feature/trips-home.component";
import { CallbackComponent }           from "./home.feature/callback.component";

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
    component: TripsHomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];

