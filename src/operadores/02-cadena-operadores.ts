import { from, range, fromEvent, of } from 'rxjs';
import { filter, map, tap  } from 'rxjs/operators';



// range(1,10).pipe(
//     filter(n=> n % 2 === 1)
// ).subscribe(console.log);


range(20,30).pipe(
filter((val,i)=>{
    console.log('index',i);
    return val % 2 === 1
})
)//.subscribe(console.log);



interface Personaje {
    tipo:string;
    nombre:string
}

const personajes:Personaje[] = [
    {
        tipo:'heroe',
        nombre:'Batman'
    },
    {
        tipo:'heroe',
        nombre:'Robin'
    },
    {
        tipo:'villano',
        nombre:'Joker'
    },
]


from(personajes).pipe(
    filter<Personaje>(p => p.tipo === 'heroe')
).subscribe(console.log);


const keyup$= fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map(event => event.code),
    tap(value=>console.log(value)),
    filter(value=> value === 'Enter')
);

keyup$.subscribe(console.log);