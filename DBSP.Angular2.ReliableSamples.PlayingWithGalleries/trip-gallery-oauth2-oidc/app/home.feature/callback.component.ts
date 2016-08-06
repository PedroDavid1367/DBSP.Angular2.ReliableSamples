require("../js.libs/oidc-token-manager");
//declare let OidcTokenManager: any;
declare let OidcClient: any;

import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import { OidcTokenManagerService }  from "../common.services/OidcTokenManager.service"

@Component({
  selector: 'callback',
  template: `
  `
})
export class CallbackComponent implements OnInit {

  private _config = {
    client_id: "tripgalleryimplicitAngular2",
    redirect_uri: "http://localhost:8080/callback",
    load_user_profile: false,
    authority: "https://localhost:44317/identity"
  }

  private _mgr: any; 

  constructor(private _router: Router,
    private _oidcTokenManager: OidcTokenManagerService) {

    //this.oidcClient = new OidcClient(this._settings);
    this._mgr = _oidcTokenManager.mgr;
    this._mgr.oidcClient = new OidcClient(this._config);
    //this._mgr = new OidcTokenManager(this._config);
    //// process the token
    //this._mgr.processTokenCallbackAsync().then(function () {
    //  //window.location.href = window.location.protocol + "//" + window.location.host + "/";
    //  _router.navigate(["home"]);
    //},
    //  function (error) {
    //    alert("Problem Getting Token : " + (error.message || error));
    //    //window.location.href = window.location.protocol + "//" + window.location.host + "/";

    //    // This might navigate to a helper component.
    //    _router.navigate(["home"]);
    //  });
  }

  ngOnInit() {
    //this._mgr = new OidcTokenManager(this._config);
    this._mgr.processTokenCallbackAsync()
      .then(() => this._router.navigate(["home"]))
      .catch(err => {
        alert("Problem Getting Token : " + (err.message || err));
        // This might navigate to a helper component.
        this._router.navigate(["home"]);
      });
  }
}
