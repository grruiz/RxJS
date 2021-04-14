import { asyncScheduler } from 'rxjs';



setTimeout(()=>{},3000);
setInterval(()=>{},3000);

// const saludar= () => console.log('Hola mundo');
const saludar2= ({a,b}) => console.log(`Hola ${a} ${b}`);

//Mandas funcion si parentesis, luego el tiempo de cuando quieres que se ejecute y por ultimo los argumentos que recibe el asyncSch
// asyncScheduler.schedule(saludar2,2000,{a:'Rafael',b:'Feeo'});


const subs = asyncScheduler.schedule(function(state) {
    console.log('state',state);
    this.schedule(state+1,1000)
},1000,0);



asyncScheduler.schedule(()=>subs.unsubscribe(),4000);

// setTimeout(()=>{
//     subs.unsubscribe();
// },3000);