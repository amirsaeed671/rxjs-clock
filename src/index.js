import { interval } from 'rxjs';
import { map, share } from 'rxjs/operators';

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const clock$ = interval(1000).pipe(
    map(() => {
        const date = new Date();
        return {
            sec: date.getSeconds(),
            min: date.getMinutes(),
            hour: date.getHours()
        }
    }),
    share(),
);

const hourSub = clock$.subscribe(({hour, min}) => {
    const hourDegrees = ((hour / 12) * 360) + ((min/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
});

const minuteSub = clock$.subscribe(({sec, min}) => {
    const minsDegrees = ((min / 60) * 360) + ((sec/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
});

const secondSub = clock$.subscribe(({sec}) => {
    const secondsDegrees = ((sec / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
});

