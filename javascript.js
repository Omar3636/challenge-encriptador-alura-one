//Declaracion de variables
let textoIngresado = '';
let botonEncriptar = document.getElementById('botonencript');
let botonDesencriptar = document.getElementById('botondesencript');

botonEncriptar.onclick = function () {
    textoIngresado = document.getElementById('recibe-texto').value;
    let textoEncriptado  = textoIngresado;
    textoEncriptado = textoEncriptado.replaceAll('e', 'enter');
    textoEncriptado = textoEncriptado.replaceAll('i', 'imes');
    textoEncriptado = textoEncriptado.replaceAll('a', 'ai');
    textoEncriptado = textoEncriptado.replaceAll('o', 'ober');
    textoEncriptado = textoEncriptado.replaceAll('u', 'ufat');
    document.getElementById('munecote').setAttribute('style', 'display: none');
    document.getElementById('encabezado').setAttribute('style', 'display: none');
    document.getElementById('parrafo-uno').setAttribute('style', 'display: none');
    document.getElementById('texto-encript').removeAttribute('style');
    document.getElementById('boton-copiar').removeAttribute('style');
    textoIngresado = document.getElementById('texto-encript').value = textoEncriptado;

};

botonDesencriptar.onclick = function() {
    document.getElementById('munecote').setAttribute('style', 'display: none');
    document.getElementById('encabezado').setAttribute('style', 'display: none');
    document.getElementById('parrafo-uno').setAttribute('style', 'display: none');
    document.getElementById('texto-encript').removeAttribute('style');
    document.getElementById('boton-copiar').removeAttribute('style');
    textoIngresado = document.getElementById('recibe-texto').value;
    let textoDesencriptado  = textoIngresado;
    textoDesencriptado = textoDesencriptado.replaceAll('enter', 'e');
    textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i');
    textoDesencriptado = textoDesencriptado.replaceAll('ai', 'a');
    textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o');
    textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u');
    textoDesencriptado = document.getElementById('texto-encript').value = textoDesencriptado;

};

function copiarTexto() {
    let textoCopiado = document.getElementById('texto-encript');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);
};