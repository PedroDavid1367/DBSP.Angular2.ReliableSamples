import { Component }          from "@angular/core";
import { ROUTER_DIRECTIVES }  from "@angular/router";

@Component({
  selector: 'rxjs-samples-home',
  template: `
  <div class="row">
    <div class="col s2">
      <ul>
        <li><a [routerLink]="['./rxjs-sample-01']">Sample 01</a></li>
        <li><a [routerLink]="['./rxjs-sample-02']">Sample 02</a></li>
      </ul>
    </div>

    <div class="col s10">
        <router-outlet></router-outlet>
    </div>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES],
})
export class RxJSSamplesHomeComponent
{

}
