const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const btnmostrar = document.querySelector('.mostrar')

function btnEncriptar(){
  const Encriptartexto = Encriptar(inputTexto.value)
  mensagem.value = Encriptartexto
  //document.style.backgroundImage = "none"
}


function Encriptar(stringEncriptar){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
  stringEncriptar = stringEncriptar.toLowerCase();

  for(let i=0; i<matrizCodigo.length; i++ ){
    if(stringEncriptar.includes(matrizCodigo[i][0])){
      stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptar;
}



function btnDesencriptar(){
  const textoDesencriptar = desencriptar(inputTexto.value)
  mensagem.value = textoDesencriptar
 
}




function desencriptar(stringDesencriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i=0; i<matrizCodigo.length; i++ ){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
  }
  return stringDesencriptada;
}


function copiar(){
    
    mensagem.select();
    mensagem.setSelectionRange(0, 99999)
    document.execCommand("copy");
  
}
  


