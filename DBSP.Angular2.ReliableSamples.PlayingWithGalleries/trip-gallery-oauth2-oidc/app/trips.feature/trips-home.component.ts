import { Component }  from '@angular/core'
import { TripsService }  from "./trips.services/trips.service"; 
import { OidcTokenManagerService }  from "../common.services/OidcTokenManager.service";

@Component({
  selector: 'trips-home',
  template: `
  <div class="row">
    <div class="col s12 m6">
      <h4>Get _trips</h4>
      <input type="button" class="btn" value="Get trips" (click)="getTrips()" /><br />
      <pre>{{ _trips | json }}</pre>
    </div>
    <div class="col s12 m6">
      <h4>Get _infoValue</h4>
      <input type="button" class="btn" value="Get info values" (click)="getInfo()" /><br />
      <pre>{{ _infoValue | json }}</pre>
    </div>
  </div>
  `
})
export class TripsHomeComponent {
  public _trips: any;
  public _infoValue: any;
  private _mgr: any;

  constructor(private _tripService: TripsService,
    private _oidcmanager: OidcTokenManagerService) {

    this._mgr = _oidcmanager.mgr;
  }

  public getTrips() {
    this._tripService.getTrips()
      .subscribe(trips => this._trips = trips);
  }

  public getInfo() {
    this._mgr.oidcClient
      .loadUserProfile(this._mgr.access_token)
      .then(userInfoValues => this._infoValue = userInfoValues);
  }
  //vm.mgr.oidcClient.loadUserProfile(vm.mgr.access_token)
  //          .then(function (userInfoValues) {
  //  vm.address = userInfoValues.address;
  //  $scope.$apply();
  //}); 
}
