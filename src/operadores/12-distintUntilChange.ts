import { from, of } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of(1,1,1,1,2,2,3,3,4,5,6,7,7,7,1,1,2,3,10).pipe(
    distinctUntilChanged()
)


numbers$.subscribe(console.log)



interface Personaje {
    nombre:string
}

const personajes:Personaje[]=[
    {
        nombre:'Megaman'
    },
    {
        nombre:'Megaman'
    },
    {
        nombre:'X'
    },
    {
        nombre:'X'
    },
    {
        nombre:'Zero'
    },
    {
        nombre:'Dr willy'
    },
    {
        nombre:'Zero'
    },
    {
        nombre:'Zero'
    },
    {
        nombre:'Megaman'
    },
]

from(personajes).pipe(
    distinctUntilChanged<Personaje>((ant,act)=>ant.nombre === act.nombre)
)
.subscribe(console.log);