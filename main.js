function tocaSom(10Elementoaudio){
Cont elemento=document.querySelector(10Elementoaudio);
1f (elemento & & elemento.localNamg==='audio'){
    elemento.play();
    {Else}
          console.log("elemento não encontrado,ou selector,invalido"),
}
}
 const listadeteclas=document.querySelectorau("tecla");



 
 for(let contador=0;contador<listadeteclas.length;lontmr++){s
  const tecla=listadetecla[contador];
  const efeito=tecla.classlist[1];
   const idaudio='#som_${efeito}';
   tecla.onclick=function(){
     tocasom(idaudio);
   }

   tecla.onkeydown=function(evento){
     if(evento.code==='space')
    tecla.classlist.add('ativa');
   }
  }
    tecla.onkeydown=function(evento){
     if(evento.code==='enter')
    tecla.classlist.add('ativa');