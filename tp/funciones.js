/* Datos de entrada
Se recibe un archivo de texto SECRETO.IN
del directorio actual, que contiene una única línea
con una cantidad máxima de 500 caracteres. Esta

línea consta de letras, números, signos de pun-
tuación y posiblemente paréntesis producto del

encriptado.
Datos de salida
El programa SECRETO.EXE debe generar el

archivo SECRETO.OUT con el mensaje deco-
dificado, en el directorio actual.
*/
function decoMensaje() {
    const msjCodi = document.getElementById('msjCodi').value.trim();
    if (msjCodi === '') {
        alert('Por favor ingresa un mensaje codificado.');
        return;
    }

    const msjDeco = decodificar(msjCodi);
    document.getElementById('msjDeco').value = msjDeco;
}

function decodificar(msjCodi) {
    let partes = msjCodi.split('('); 
    let msjDeco = '';

    for (let i = 0; i < partes.length; i++) {
        if (partes[i].includes(')')) { 
            let parteCodificada = partes[i].split(')')[0];
            msjDeco += parteCodificada.split('').reverse().join('');
            msjDeco += partes[i].split(')')[1];
            
        } else {
            msjDeco += partes[i];
        }
    }
    alert(msjDeco);
    
    return msjDeco;
}

