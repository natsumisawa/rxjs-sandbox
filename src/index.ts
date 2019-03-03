import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

let ob$ = new Observable(observer => {
  let count = 0;
  let interval = setInterval(() => {
      observer.next(count++);
  }, 1000);
});

ob$.filter((value: number) => {
  return value % 3 == 0 || String(value).indexOf('3') >= 0;
}).subscribe(value => console.log(value));
