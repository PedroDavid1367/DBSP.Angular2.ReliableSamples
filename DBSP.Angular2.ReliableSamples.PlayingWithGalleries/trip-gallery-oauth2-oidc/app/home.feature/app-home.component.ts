import { Component, ElementRef, OnInit }  from "@angular/core";
//declare var $: any;
let $ = require("jquery");

@Component({
  selector: 'app-home',
  template: `
  App home component<br />
  <input id="jqueryButton" type="button" class="btn" value="Click me" />
  <div id="jqueryDiv"></div>
  `
})
export class AppHomeComponent implements OnInit {
  constructor(private _elRef: ElementRef) { }

  ngOnInit() {
    $(this._elRef.nativeElement).find("#jqueryButton")
      .on("click", () => $(this._elRef.nativeElement).find("#jqueryDiv").text("eg"));
  }
}

