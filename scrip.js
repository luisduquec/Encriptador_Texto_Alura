function Encriptar_Desencriptar(texto, Encriptar){
    let conversion = "";
    if (Encriptar == 1){
        let changes = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};
        for (let vocal of texto){
            if (Object.keys(changes).includes(vocal)){
                conversion = conversion + changes[vocal]
            }
            else{
                conversion = conversion + vocal
            }
        }
    }
    else{
        let changes = {"ai": "a", "enter": "e", "imes": "i", "ober": "o", "ufat": "u"};
        for (let item of Object.keys(changes)){
            if (texto.includes(item)){
                texto = texto.replaceAll(item, changes[item])
            }
        }
        conversion = texto

    }
    return conversion;
    }

function cleanRectan(textoNuevo){
    let rectan = document.getElementById("rect1");
    rectan.style.fontSize = "42px";
    rectan.style.textAlign = "center";
    rectan.innerHTML = textoNuevo;  
}


function Encriptar(){
    let textoIngresado = document.getElementById("textBox").value;
    let textoNuevo = Encriptar_Desencriptar(textoIngresado,1);
    //alert(textoNuevo);
    cleanRectan(textoNuevo);
}


function Desencriptar(){
    let textoIngresado = document.getElementById("textBox").value;
    let textoNuevo = Encriptar_Desencriptar(textoIngresado,2);
    //alert(textoNuevo);
    cleanRectan(textoNuevo);
}

