import { Component, OnInit, AfterViewInit, ElementRef,
  ViewChild, Renderer }  from '@angular/core';
import { Observable }    from "rxjs/Observable";

@Component({
  selector: 'rxjs-sample01',
  styles: [`
  .board {
    height: 100px;
    width: 200px;
    border: solid black 1px;
    background-color: beige;
  }  
  `],
  template: `
  <input #input type="text" placeholder="A focused text input" />
  <div class="row">
    <div class="col m6">
      <div #board_a class="board"></div>
    </div>
    <div class="col m6">
      <div #board_b class="board"></div>
    </div>
  <div>
  <br />
  <br />
  <p>{{ result }}</p>
  `
})
export class RxJSSample01Component implements AfterViewInit
{
  @ViewChild('input') input: ElementRef;
  @ViewChild('board_a') board_a: ElementRef;
  @ViewChild('board_b') board_b: ElementRef;
  private sourceBoard_a: Observable<any>;
  private sourceBoard_b: Observable<any>;
  // TODO: change subscription to Subscription type.
  private subscription: any;
  private result: number = 0;

  constructor(private renderer: Renderer) { }

  ngAfterViewInit()
  {
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    this.sourceBoard_a = Observable.fromEvent(this.board_a.nativeElement, "click");
    this.sourceBoard_b = Observable.fromEvent(this.board_b.nativeElement, "click");

    this.sourceBoard_a.take(2)
      .subscribe(e => this.result++);
    this.sourceBoard_b.take(3)
      .subscribe(e => this.result++);

    let eg = Observable.merge(this.sourceBoard_a, this.sourceBoard_b);
    eg.subscribe(e => {
      if (this.result === 5)
      {
        alert("^_^");
      }
    });
  } 
}
