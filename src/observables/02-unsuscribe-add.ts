import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('siguiente [next]:',value),
    error: error => console.log('error [obs]',error),
    complete: () => console.info('completador [nose]')
}


const intervalo$ = new Observable<number>(suscriber =>{
    let count:number = 10
   const interval = setInterval(()=>{
        suscriber.next(count++);
        console.log(count);
        
    },1000);
    setTimeout(()=>{
        suscriber.complete()
    },2500);
    return () =>{
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});


const subs =  intervalo$.subscribe(observer);
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

subs.add(subs2)
    .add(subs1);


setTimeout(()=>{
  subs.unsubscribe()  
//   subs1.unsubscribe()  
//   subs2.unsubscribe()  
    
  console.log('compleado timeout')
},6000);