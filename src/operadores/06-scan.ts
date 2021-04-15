import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";



const numeros = [1,2,3,4,5];



const totalAcumulador = (acc,cur) => acc + cur;

//Reduce te da el valor total
from(numeros).pipe(
    reduce(totalAcumulador,0)
)
.subscribe(console.log)


//Scan te da el valor uno a uno
from(numeros).pipe(
    scan(totalAcumulador,0)
)
.subscribe(console.log)

interface Usuario {
    id?:string;
    autenticado?:boolean;
    token?:string;
    edad?:number;
};

const user:Usuario[]=[
    { id:'Raf',autenticado:false,token:null },
    { id:'Raf',autenticado:true,token:'Abc' },
    { id:'Raf',autenticado:true,token:'ABC123' },
];


const state$ = from( user ).pipe(
    scan<Usuario>( (acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map(state => state.id)
)

id$.subscribe(console.log);