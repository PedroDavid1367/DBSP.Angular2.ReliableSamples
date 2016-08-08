import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

import { Hero } from "./hero.type";

@Component({
  selector: "hero-detail",
  styles: [".active { background-color: beige; }"],
  template: `
  <div [ngClass]="{active: clicked}">
    <span>{{ hero.id }}. </span> 
    <a (click)="heroClicked()">{{ hero.name }}</a>
  </div>
  `
})
export class HeroDetailComponent implements OnChanges {
  @Input() hero: Hero;
  @Output() change: EventEmitter<HeroClickedObject> = new EventEmitter<HeroClickedObject>();
  @Output() log: EventEmitter<string> = new EventEmitter<string>();
  clicked: boolean = false;

  ngOnChanges() {
    this.log.emit(`ngOnChanges activated for: ${this.hero.name}`);
  }

  heroClicked(): void {
    this.clicked = !this.clicked
    let heroCLickedObj: HeroClickedObject = {
      clicked: this.clicked,
      hero: this.hero
    };
    this.change.emit(heroCLickedObj);
  }
}

export interface HeroClickedObject {
  clicked: boolean;
  hero: Hero;
}