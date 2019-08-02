let lista = document.querySelector("ol");
let corpo = document.querySelector("body");

let raizes = [
    {nome:"batata"},
    {nome:"mandioca"},
    {nome:"rabanete"}
];

let imprimirComidas = () => { 
    for(let raiz of raizes){
        lista.innerHTML += `<li>${raiz.nome}</li>`
    }   

    corpo.style.backgroundColor = Cor;
}

let adicionarComida = (callback) =>{
    let escolheCor = prompt("Digite uma cor em ingles");
    setTimeout(() => {
        raizes.push({nome:"gengibre"});
        callback();
    }, 2000);
};



adicionarComida(imprimirComidas);







// let diaSemana = "Sextou";

// let callback = (resolve, reject) => {
//     if(diaSemana == "Sextou") {
//         resolve("Acertou");
//     }
// }