import * as timer from 'timers';

const numbers = [1, 2, 3, 4];

numbers.forEach((elem: number, index: number) => {
    timer.setTimeout(() => {
        console.log(elem)
    }, index * 1000);
})