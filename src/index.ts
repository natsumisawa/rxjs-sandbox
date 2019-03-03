import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs';
import 'rxjs/Rx';

const observable = new Observable(observer => {
  observer.next("hello");
  observer.next("world");
  observer.complete();
})

console.log("まだsubscribeしてないよ")

observable.subscribe(x => console.log(x));
// > hello
// > world


// interval(period: number, scheduler: Scheduler): Observable
// https://www.learnrxjs.io/operators/creation/interval.html
const intervalObs = Observable.interval(1000)
console.log("まだsubscribeしてないよ")
intervalObs.subscribe(x => console.log(x));
// 1s毎に
// > 0, 1, 2, 3...

intervalObs.filter(value => value % 3 == 0)
  .subscribe(x => console.log(x));
// 3s毎に
// > 0, 3, 6, 9...

// timer(initialDelay: number | Date, period: number, scheduler: Scheduler): Observable
// https://www.learnrxjs.io/operators/creation/timer.html
const timerObs = Observable.timer(3000)
timerObs.subscribe(x => console.log("timer:" + x));

// take
// http://reactivex.io/documentation/operators/take.html
const timer1To5obs = Observable.timer(0, 1000)
    .takeUntil(Observable.timer(5000));
timer1To5obs.subscribe(x => console.log("5sで止まるtimer" + x));
