import { Observable, Observer } from 'rxjs';


const observer:Observer<any> = {
    next: value => console.log('siguiente [next]:',value),
    error: error => console.log('error [obs]',error),
    complete: () => console.info('completador [nose]')
}

const obs$ = new Observable<string>(subs =>{
    subs.next('Hola');
    subs.next('Hola');
    subs.next('Hola');
});


obs$.subscribe()


// obs$.subscribe(
//     valor => console.log('next: ',valor),
//     error => console.log('error',error ),
//     () => console.log('Completadoo amigo')
// );
