import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numbers$ = of(1,1,1,1,2,2,3,3,4,5,6,7,7,7).pipe(
    distinct()
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
        nombre:'Megaman'
    },
]

from(personajes).pipe(
    distinct(p=>p.nombre)
)
.subscribe(console.log);