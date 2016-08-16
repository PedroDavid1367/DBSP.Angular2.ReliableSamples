import { Component, OnInit, AfterViewInit, ElementRef,
  ViewChild, Renderer }  from '@angular/core';
import { Observable }    from "rxjs/Observable";

@Component({
  selector: 'rxjs-sample02',
  styles: [`
  input {
    width: 250px;
  }
  `],
  template: `
  <h4 class="center">Observable.create()</h4>
  <p>{{ evenNumber }}</p>
  <div class="center-btn">
    <input type="button" class="btn" value="Start even number flow" 
            (click)="startEvenNumbersFlow()" />    
    <input type="button" class="btn" value="Stop even number flow" 
            (click)="stopEvenNumbersFlow()" />  
  </div>
  <br />
  <hr />
  <br />
  <h4 class="center">Observable.empty()</h4>
  <p>{{ onNextText }}</p>
  <p>{{ onCompleteText }}</p>
  <div class="center-btn">
    <input type="button" class="btn" value="Start empty flow" 
            (click)="startEmptyFlow()" />     
  </div>
  <br />
  <hr />
  <br />
  <h4 class="center">Observable.empty()</h4>
  <p>It's possible to create an Observable from an array, collection, Promise or string</p>
  <br />
  <pre>{{ results | json }}</pre>
  <div class="center-btn">
    <input type="button" class="btn" value="Start from method" 
            (click)="startFromMethod()" />     
  </div>
  `
})
export class RxJSSample02Component implements OnInit {

  private evenNumber: number;
  private evenNumbers: Observable<number>;
  private emptyFlow: Observable<string>;
  private fromArray: Observable<number>;
  private fromPromise: Observable<string>;
  private fromString: Observable<string>;
  // It should be a Subscription
  private evenNumbersSubscription: any;
  private emptyFlowSubscription: any;
  private onNextText: string;
  private onCompleteText: string;
  private results: any = {
    fromArray: 0,
    fromPromise: "",
    fromString: ""
  };

  public ngOnInit() {
    this.evenNumbers = Observable.create(observer => {
      let value: number = 0;
      const interval = setInterval(() => {
        if (value % 2 === 0) {
          observer.next(value);
        }
        value++;
      }, 100);

      return () => clearInterval(interval);
    });

    this.emptyFlow = Observable.empty<string>();

    this.fromArray = Observable.from([1, 2, 3, 4, 5, 6]);

    this.fromPromise = Observable.from<string>(new Promise(resolve => resolve("Hello World")));

    this.fromString = Observable.from<string>("Pedro David");
  }

  public stopEvenNumbersFlow() {
    this.evenNumbersSubscription.unsubscribe();
  }

  public startEvenNumbersFlow() {
    this.evenNumbersSubscription = this.evenNumbers.subscribe(n => {
      this.evenNumber = n;
    });

    //setTimeout(() => {
    //  this.evenNumbersSubscription.unsubscribe();
    //}, 20000);
  }

  public startEmptyFlow() {
    this.emptyFlowSubscription = this.emptyFlow.subscribe({

      // Next is never called due to observable is empty.
      next: () => {
        console.log("Next was called");
        this.onNextText = "Next was called"
      },
      complete: () => {
        console.log("Complete was called");
        this.onCompleteText = "Complete was called"
      }
    });
  }

  public startFromMethod() {
    this.fromArray
      .filter(n => n % 2 == 0)
      .map(n => n * n)
      .subscribe(n => this.results.fromArray += n)
      .unsubscribe();    

    this.fromPromise
      .subscribe(result => this.results.fromPromise = result);

    this.fromString
      .map(l => l + " ")
      .subscribe(l => this.results.fromString += l);
  }
}
