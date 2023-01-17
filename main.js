
function tocaSom(idElementoAudio) {
   const element =  document.querySelector(idElementoAudio);
   if(element === null){
    alert('elemento não encontrado')
   }if(element != null && element.localName === 'audio'){

   element.play();
   }else{
    console.log('elemento não encontrado');
   }
 
}
const listaTeclas = document.querySelectorAll('.tecla'); 

for (let contador = 0; contador < listaTeclas.length; contador ++) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio =  `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event, ){
        console.timeLog(event.code)
        if(event.code == 'backspace' || event.code == 'enter'){
        tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function() {
        if(tecla.onkeydown == 'backspace' || tecla.onkeydown == 'enter'){
        tecla.classList.remove('ativa');
    
         }
    }

    
}