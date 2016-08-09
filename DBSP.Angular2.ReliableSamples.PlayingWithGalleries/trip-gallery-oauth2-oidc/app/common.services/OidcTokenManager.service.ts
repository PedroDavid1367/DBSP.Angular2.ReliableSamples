require("../js.libs/oidc-token-manager.js");
declare let OidcTokenManager: any;

import { Injectable} from '@angular/core';

@Injectable()
export class OidcTokenManagerService {
  private _config = {
    client_id: "tripgalleryimplicitAngular2",
    redirect_uri: "http://localhost:8080/callback",
    post_logout_redirect_uri: "http://localhost:8080/home",
    response_type: "id_token token",
    scope: "openid profile address gallerymanagement roles",
    authority: "https://localhost:44317/identity",
    silent_redirect_uri: "http://localhost:8080/silent-refresh",
    silent_renew: true
  };

  private _mgr: any;

  constructor() {
    this._mgr = new OidcTokenManager(this._config);
  }

  public get mgr() {
    return this._mgr;
  }
}
