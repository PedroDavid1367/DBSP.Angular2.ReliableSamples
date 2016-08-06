import { RouterConfig, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightBookingGuard } from './flight-booking/flight-booking.guard';
import { FlightEditGuard } from './flight-edit/flight-edit.guard';

const APP_ROUTES: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    terminal: true
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'flight-booking',
    component: FlightBookingComponent,
    canActivate: [FlightBookingGuard],
    children: [
      {
        path: '',
        redirectTo: 'flight-search'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent,
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        canDeactivate: [FlightEditGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

//const APP_ROUTES: RouterConfig = [
//  {
//    path: '/home',
//    component: HomeComponent,
//    index: true
//  },
//  {
//    path: '/flight-booking',
//    component: FlightBookingComponent,
//    canActivate: [FlightBookingGuard],
//    children: [
//      {
//        path: '/flight-search',
//        component: FlightSearchComponent,
//        index: true
//      },
//      {
//        path: '/passenger-search',
//        component: PassengerSearchComponent
//      },
//      {
//        path: '/flight-edit/:id',
//        component: FlightEditComponent,
//        canDeactivate: [FlightEditGuard]
//      }
//    ]
//  }
//];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES),
  FlightBookingGuard,
  FlightEditGuard
  //--> provide(FlightBookingGuard, {useClass: FlightBookingGuard})
];