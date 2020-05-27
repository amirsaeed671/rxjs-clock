import { of } from 'rxjs';

const initial$ = of(1, 2, 3);

initial$.subscribe(console.log);
