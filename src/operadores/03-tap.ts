import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';



const numeros$ = range(1,5);


numeros$.pipe(
    tap(value => {
        console.log('antes',value);
        return 100;
    }),
    map(val=> val * 10),
    tap({
        next: valor => console.log('despues en NEXT',valor),
        complete: () => console.log('Se acabooo')
    })
)
.subscribe(val => console.log('subs',val));
