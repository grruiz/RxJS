import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


const rango$ = range(1,5).pipe(
    map<number,string>(val =>{
        return (val*10).toString();
    })
);


rango$.subscribe(n => console.log(n))

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe( code =>console.log('map',code));
keyupPluck$.subscribe(code =>console.log('pluck',code));
keyupMapTo$.subscribe(code =>console.log('MapTo',code));