import { Component, Inject, OnInit, ElementRef }  from "@angular/core";

@Component({
  selector: "dbsp-note-category-list",
  template: `
  <ul class="collapsible popout" data-collapsible="accordion">
    <li>
      <div class="collapsible-header">
        <i class="material-icons">info_outline</i>First
      </div>
      <div class="collapsible-body">
        <div><a class="btn-flat right" (click)="greet()">Click me</a></div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </li>
    <li>
      <div class="collapsible-header">
        <i class="material-icons">info_outline</i>First
        <span></span>
      </div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <!--<dbsp-note-category></dbsp-note-category>-->
  </ul>
  `
})
export class DbspNoteCategoryListComponent implements OnInit {

  constructor( @Inject("$") private $: any,
    private _elRef: ElementRef) { }

  ngOnInit() {
    this.$(this._elRef.nativeElement)
      .find(".collapsible")
      .collapsible();
  }

  greet() {
    alert("Greetings");
  }
}

