import { Component, OnInit }        from '@angular/core';
import { OidcTokenManagerService }  from "../common.services/OidcTokenManager.service"

@Component({
  selector: 'silent-refresh',
  template: `
  `
})
export class SilentRefreshComponent implements OnInit {

  private _mgr: any; 

  // This component uses a service instead of instantiating one.
  constructor(private _oidcTokenManager: OidcTokenManagerService)
  {
    this._mgr = _oidcTokenManager.mgr;
  }

  ngOnInit()
  {
    this._mgr.processTokenCallbackSilent();
  }
}
