function tocaSom(seletorAudio){
 const elemento = document.querySelector(seletorAudio).play('');

if(elemento != null && elemento.localName === 'audio'){
    elemento.play();
}else{
    alert('elemento não encontrado');
}
}
 
    const listaDeTeclas = document.querySelectorAll('.tecla');

   for(contador = 0; contador < listaDeTeclas.length; contador++)

const instrumento = listaDeTeclas[contador].classList[1];

   const tecla = listaDeTeclas[contador];

  const idAudio = '#som_${instrumento}';
   
  tecla.onclick = function(){
    tocaSom(idAudio);
};
tecla.onkeydown = function (evento)
  if(evento.code === 'Space' || evento.code === 'Enter')
   tecla.classList.add('ativa');

   tecla.onkeyup = function(evento){
    tecla.classList.remove('ativa');
}
   
listaDeTeclas[1].onclick = tocaSomClap;
listaDeTeclas[2].onclick = tocaSomTim;
listaDeTeclas[3].onclick = tocaSomPuff;

   document.querySelector('.tecla_pom').onclick = tocaSomPom ();

    //document.querySelector('.tecla_pom').onclick = toca 