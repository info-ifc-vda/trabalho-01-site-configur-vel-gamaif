function MudarTema(){

    let corpo = document.getElementById("body");

    corpo.classList.toggle("dark");

}

let fontSize = 16;

function Aumentar(){

    let corpo = document.getElementById("body");

    fontSize += 2;

    corpo.style.fontSize = fontSize + "px";

}

function Diminuir(){

    let corpo = document.getElementById("body");

    fontSize -= 2;

    corpo.style.fontSize = fontSize + "px";

}

function MudarImagem(img){

    if(img.src.includes("DSC_5412-1.jpg")){

        img.src = "Img/images (1).jpg";

    }else{

        img.src = "Img/DSC_5412-1.jpg";

    }

}

function MostrarTexto(id){

    let texto = document.getElementById(id);

    texto.classList.toggle("mostrar");

}