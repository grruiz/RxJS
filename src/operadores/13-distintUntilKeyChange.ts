import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';


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
    distinctUntilKeyChanged<Personaje>('nombre')
)
.subscribe(console.log);