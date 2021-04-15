import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';



const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros mi, venenatis vel justo ac, dictum convallis tortor. Proin sed dolor fringilla, hendrerit dui faucibus, blandit lectus. Vestibulum blandit hendrerit diam at tempor. Suspendisse sit amet ex ac turpis maximus pellentesque. Suspendisse fermentum volutpat lacus at consectetur. Cras non magna ut dolor finibus rhoncus a id velit. Suspendisse condimentum, lorem quis dictum ornare, odio arcu sagittis nulla, vitae aliquam libero enim non sapien. Cras ac libero tempor, semper felis sit amet, luctus neque. Sed et scelerisque dui, ut gravida mauris. Fusce non augue volutpat, vestibulum risus eu, luctus nisi. Etiam varius diam ut auctor accumsan. Fusce elementum suscipit ex, id gravida dolor bibendum at.
<br /><br />
Mauris laoreet tempor dignissim. Duis laoreet at augue at finibus. Sed tincidunt vehicula quam, at aliquam ipsum vestibulum vitae. Nulla turpis justo, molestie sed tincidunt at, sagittis sit amet tellus. Proin ullamcorper libero a ipsum ornare, ac commodo arcu eleifend. Curabitur augue sem, gravida vel sollicitudin eu, ultricies nec diam. Vivamus at leo nec justo efficitur fermentum. Nam vel augue erat. Donec ultrices purus ac nisl egestas maximus.
<br /><br />
Donec semper erat in lorem ornare, ac sollicitudin lacus consectetur. Vestibulum sagittis et ante a malesuada. Donec magna felis, vehicula vestibulum nibh a, consequat pulvinar orci. Fusce euismod, dolor et gravida pulvinar, nisi augue ornare elit, a sagittis purus tellus sit amet massa. Mauris nec massa massa. Nullam vitae interdum nisi, eget cursus ipsum. Nunc ac pulvinar nisi. Duis blandit risus vitae massa facilisis placerat. Fusce fermentum sed sapien vitae ultricies. In ut bibendum sapien. Maecenas at ante orci. Nam a velit eget erat accumsan porttitor in quis eros. Nulla rhoncus tristique metus nec lacinia.
<br /><br />
Pellentesque rhoncus, nibh ut laoreet consequat, neque ex molestie elit, vel consectetur justo eros eu sapien. Nullam eu viverra augue. Maecenas rutrum facilisis lorem a venenatis. Mauris ut nisl ex. Integer pharetra, nisi quis iaculis accumsan, lectus dui eleifend nisl, ac placerat lacus lorem vel velit. Cras in porttitor augue. Suspendisse potenti. Vivamus hendrerit scelerisque tortor dapibus porta. Cras enim felis, malesuada ut convallis sollicitudin, tempus nec nunc. Suspendisse potenti.
<br /><br />
Donec malesuada non magna at venenatis. Ut volutpat urna nec arcu blandit condimentum. Vestibulum mauris dolor, laoreet non lorem ut, lobortis tristique quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed fringilla lacinia turpis ac eleifend. Phasellus ultrices nunc in orci varius, ac lobortis nibh viverra. Phasellus porttitor risus sit amet pellentesque convallis. Praesent et ornare ligula. Donec auctor, leo at eleifend molestie, ligula magna luctus risus, vel luctus ipsum purus vel massa. Mauris bibendum dignissim turpis, non sodales est suscipit sed. Morbi tincidunt, lectus in feugiat malesuada, metus nunc efficitur velit, vel luctus est nisl vitae orci. Sed pharetra mattis ultricies. Duis commodo, dui non maximus sodales, mauris diam porttitor felis, eget accumsan odio turpis at quam. Vestibulum bibendum semper nisi vitae ullamcorper. Mauris tristique tristique enim, non mollis diam molestie sit amet. Donec gravida id augue et 
`

const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);


//streams
const calcularPorcentajeScroll = (event)=>{
   const {
    scrollTop,
    scrollHeight,
    clientHeight
   } = event.target.documentElement;

   return(scrollTop/(scrollHeight-clientHeight)) * 100
}

const scroll$ = fromEvent(document,'scroll');

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
)

progress$.subscribe(porcentaje=>{
    progressBar.style.width = `${porcentaje}%`
})