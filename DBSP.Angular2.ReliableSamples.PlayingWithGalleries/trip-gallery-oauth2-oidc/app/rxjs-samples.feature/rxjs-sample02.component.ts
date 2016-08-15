import { Component, OnInit, AfterViewInit, ElementRef,
  ViewChild, Renderer }  from '@angular/core';
import { Observable }    from "rxjs/Observable";

@Component({
  selector: 'rxjs-sample02',
  template: `
  <div>{{ evenNumber }}</div>
  <input type="button" class="btn" value="Stop even number flow" 
         (click)="stopEvenNumbersFlow()" />
  `
})
export class RxJSSample02Component implements OnInit
{
  private evenNumber: number;
  private evenNumbers: Observable<number>;
  // It should be a Subscription
  private evenNumbersSubscription: any;

  ngOnInit()
  {
    this.evenNumbers = Observable.create(observer => {
      let value: number = 0;
      const interval = setInterval(() => {
        if (value % 2 === 0) {
          observer.next(value);
        }
        value++;
      }, 1000);

      return () => clearInterval(interval);
    });

    this.evenNumbersSubscription = this.evenNumbers.subscribe(n => {
      this.evenNumber = n;
    });

    setTimeout(() => {
      this.evenNumbersSubscription.unsubscribe();
    }, 20000);
  }

  stopEvenNumbersFlow()
  {
    this.evenNumbersSubscription.unsubscribe();
  }
}
