import { RouterConfig, provideRouter } from "@angular/router";
import { AppHomeComponent }            from "./home.feature/app-home.component";
import { NotFoundComponent }           from "./home.feature/not-found.component";
import { TripsHomeComponent }          from "./trips.feature/trips-home.component";
import { TripsHomegGuard }             from "./trips.feature/trips-home.guard";
import { CallbackComponent }           from "./home.feature/callback.component";
import { MaterializeHomeComponent }    from "./materialize-samples/materialize-home.component";
import { NotesHomeComponent }          from "./notes.feature/notes-home.component"; 

import { LocalLogoutComponent }        from "./home.feature/local-logout.component";
import { SilentRefreshComponent }      from "./home.feature/silent-refresh.component";

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
    path: 'note-components',
    component: NotesHomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'local-logout',
    component: LocalLogoutComponent
  },
  {
    path: 'silent-refresh',
    component: SilentRefreshComponent
  },
  //{
  //  path: '**',
  //  redirectTo: '/home', // This should redirect to a help page.
  //},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];


