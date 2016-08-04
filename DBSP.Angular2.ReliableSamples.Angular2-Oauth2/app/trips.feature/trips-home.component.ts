import { Component }  from '@angular/core'
import { TripsService }  from "./trips.services/trips.service"; 

@Component({
  selector: 'trips-home',
  template: `
  Trips component comes here
  
  <br />
  <input type="button" class="btn btn-primary" value="Get trips" (click)="getTrips()" />
  <br />
  <pre>{{ _trips | json }}</pre>
  `
})
export class TripsHomeComponent {
  public _trips: any;

  constructor(private _tripService: TripsService) {
  }

  public getTrips() {
    this._tripService.getTrips()
      .subscribe(trips => this._trips = trips);
  }
}
