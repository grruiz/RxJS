import { of, from, Observer } from 'rxjs';

/**
 * of = Toma argumentos y genera una secuencia de valores
 * from = Crea un observable en base a un array, promise,iterable,observable
 */


const observer = {
    next: val => console.log('next: ',val),
    error: error => console.log('Todo mal'),
    complete: () => console.log('complete ')
};


const miGenerator = function *() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerator();

from(miIterable).subscribe(observer);
// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Fernando');
// const source$ = from(fetch('https://api.github.com/users/grruiz'));


// source$.subscribe(async(resp)=>{
//     console.log(resp);
//     const dataResponse = await resp.json();

//     console.log(dataResponse.login);
    
// });


// source$.subscribe(observer);