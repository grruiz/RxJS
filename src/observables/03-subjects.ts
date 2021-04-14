import { Observable, Observer, Subject } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('siguiente [next]:',value),
    error: error => console.log('error [obs]',error),
    complete: () => console.info('completador [nose]')
}

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(()=> {
        subs.next(Math.random());
    },2000);

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
        
    }
});

/**
 * 1- Casteo multiple nos permite compartir valores entre las distintas subscripciones
 * 2- Es un observer
 * 3- Podemos manerjar el next,error y complete
 */


const subjects$ = new Subject();
const subscription = intervalo$.subscribe(subjects$);


intervalo$.subscribe(subjects$);


const subs1 = subjects$.subscribe(observer);
const subs2 = subjects$.subscribe(observer);



setTimeout(()=>{
    subjects$.next(10);
    subjects$.complete();
    subscription.unsubscribe();
},3500);
// const subs1 = intervalo$.subscribe(rnd=>console.log('subs1',rnd));
// const subs2 = intervalo$.subscribe(rnd=>console.log('subs2',rnd));