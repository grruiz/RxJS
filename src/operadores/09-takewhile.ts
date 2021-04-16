import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document,'click').pipe(
    map(({x,y})=>({x,y})),
    //takeWhile(({y})=> y <= 150)
    takeWhile(({y})=> y <= 150,true) // El ulimo argumento incluye el ultimo 150
);

click$.subscribe({
    next: val => console.log('next:',val),
    complete: () => console.log('completado')
});