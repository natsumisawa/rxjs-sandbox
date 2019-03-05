import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

export class ObservableSandbox {
    constructor() {
    }

    // https://www.learnrxjs.io/operators/creation/interval.html
    public interval_1(): Subscription {
      return Observable.interval(1000).subscribe(x => console.log(x));
    }

    public interval_3(): Subscription {
      return Observable.interval(1000)
        .filter(value => value % 3 == 0)
        .subscribe(x => console.log(x));
    }

    // https://www.learnrxjs.io/operators/creation/timer.html
    public timer(): Subscription {
      return Observable.timer(3000)
        .subscribe(x => console.log("timer:" + x));
    }

    // http://reactivex.io/documentation/operators/take.html
    public takeUntilTimer(): Subscription {
      return Observable.timer(0, 1000)
        .takeUntil(Observable.timer(5000))
        .subscribe(x => console.log("3sで止まる" + x));
    }
}

// file:///www/rxjs-sandbox/index.htmlにアクセスするとconsoleに出力される
(new ObservableSandbox()).takeUntilTimer()
