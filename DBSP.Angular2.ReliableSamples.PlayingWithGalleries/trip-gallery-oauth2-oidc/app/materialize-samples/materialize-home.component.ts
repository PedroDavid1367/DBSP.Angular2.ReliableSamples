import { Component }  from '@angular/core';
import { DbspCollapsibleComponent } from "./dbsp-collapsible.component";

@Component({
  selector: 'materialize-home',
  template: `
  Materialize Home components:
  <br />
  <dbsp-collapsible></dbsp-collapsible>
  `,
  directives: [DbspCollapsibleComponent]
})
export class MaterializeHomeComponent {}

