let userText = document.getElementById("textInputUser");
let mensaje = document.getElementById("textResultado");


const munieco = document.querySelector('.resultado-inicio');
const textResultado = document.querySelector('.resultado-final');

let tieneMayuscula = false;

let resultado;

const revisarLetrasMinusculas = ()=>{
    let text = userText.value;

    for (let letra of text){
        if (letra == letra.toUpperCase()){
            console.log(`la ${letra} es mayuscula`);
            return tieneMayuscula = true;
        }
    }
}


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


// const cambiarLetra = ()=>{       Un intento fallido
//     text = userText.value;
//     let letter = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
//     // let contador;
//     // let auto = 0;
//     resultado = text.replaceAll(letter[0][0], letter[0][1]);
//     // resultado = text.replaceAll(letter[1][0], letter[1][1]);
//     // resultado = text.replaceAll(letter[2][0], letter[2][1]);
//     // resultado = text.replaceAll(letter[3][0], letter[3][1]);
//     // resultado = text.replaceAll(letter[4][0], letter[4][1]);
    
// }

const encriptar = ()=>{
    let text = userText.value;
    ocultar();
    revelar();
    encriptarLetras(text);
    mensaje.innerHTML = resultado;
}

const desencriptar = ()=>{
    let text = userText.value;
    ocultar();
    revelar();
    desencriptarLetras(text);
    mensaje.innerHTML = resultado;
}

const ocultar = ()=>{
    munieco.classList.add('ocultar');
}

const revelar = ()=>{
    textResultado.classList.remove('ocultar');
}

const encriptarLetras =(mensaje)=>{
    let texto = mensaje;
    resultado = '';
    
    for (let i of texto){
        switch (i){
            case 'a':
                resultado += 'ai';
                break;
            case 'e':
                resultado += 'enter'
                break;
            case 'i':
                resultado += 'imes';
                break;
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default :
                resultado += i;
        }
    }
    return resultado;
}

let enviarTextEncriptado = document.getElementById("enviarTextEncriptado");

enviarTextEncriptado.onclick = encriptar;


//  Desencriptar 


const desencriptarLetras =(mensaje)=>{
    let texto = mensaje;
    resultado = '';
    
    for (let i = 0; i < texto.length; i++){
        switch (texto[i]){
            case 'a':
                resultado += 'a';
                i += 1;
                break;
            case 'e':
                resultado += 'e'
                i += 4;
                break;
            case 'i':
                resultado += 'i';
                i += 3;
                break;
            case 'o':
                resultado += 'o';
                i += 3;
                break;
            case 'u':
                resultado += 'u';
                i += 3;
                break;
            default :
                resultado += texto[i];
        }
    }
    return resultado;
}

let enviarTextDesencriptado = document.getElementById('enviarTextDesencriptado');

enviarTextDesencriptado.onclick = desencriptar;

// Copiar


// const copy = () =>{
//     let mensajes = document.getElementById("textResultado")
    
//     mensajes.select();
//     document.execCommand('copy');
//     alert('el texto fue copiado')
// }

// let copyPaste = document.getElementById('copiarText');

// copyPaste.onclick = copy;