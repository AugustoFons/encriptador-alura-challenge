const txtIngresado = document.querySelector(".txtIngresado")
const txtEncriptado = document.querySelector(".txtEncriptado")
const btncopiar = document.querySelector(".copiar")


/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function botonEncriptar() {
    const textoEncriptado = encriptar(txtIngresado.value) //para recibir lo que escribe el usuario
    txtEncriptado.value = textoEncriptado
    txtIngresado.value = ""
    txtEncriptado.style.backgroundImage = "none"
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(txtIngresado.value) //para recibir lo que escribe el usuario
    txtEncriptado.value = textoEncriptado
    txtIngresado.value = ""
}

function botonCopiar() {

}

function    encriptar(texto) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
    texto = texto.toLowerCase(); //para reconocer solo minusculas

        for(let i = 0; i < matriz.length; i++) {
            if(texto.includes(matriz[i][0])) {      //en cada i va a verificar la posicion 0 (a,e,i,o,u)
                texto = texto.replaceAll(matriz[i][0], matriz[i][1]) //remplaza la posicion 0 por la 1 (enter,imes,etc)
            }
    } 
    return texto
}


function    desencriptar(textoD) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
    textoD = textoD.toLowerCase(); //para reconocer solo minusculas

        for(let i = 0; i < matriz.length; i++) {

            if(textoD.includes(matriz[i][1])) {      //en cada i va a verificar la posicion 0 (a,e,i,o,u)
                textoD = textoD.replaceAll(matriz[i][1], matriz[i][0]) //remplaza la posicion 0 por la 1 (enter,imes,etc)
            }
    } 
    return textoD
};

function copiar() {
    txtEncriptado.select();
    navigator.clipboard.writeText(txtEncriptado.value);
    txtEncriptado.value  = "";
    txtEncriptado.style.backgroundImage = ""

}