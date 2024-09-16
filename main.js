let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena")

const cadenaCaracteres = "ABCDEFJHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz"


function generar (){

    let numeroDigitado = parseInt (cantidad.value);

    if( cantidad < 8){
        alert("La contrasena tiene que ser mayor a 8 caracteres");
    }

    let password = "";
    for (let i=0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)]
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

     contrasena.value = password;
}

boton.addEventListener("click",generar);






