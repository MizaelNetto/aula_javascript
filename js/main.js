

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://www.profissionaisti.com.br/");
    //window.location.href = "http://latam.com";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}


/*
function validaIdade(idade) {
    var validar;
    if(idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
alert(validaIdade(idade));
*/

/*
function soma(n1, n2){
    return(n1 + n2);
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));    
*/

/*
var d = new Date();
alert(d.getMonth()+1);
//alert(d.getDate());
//alert(d.getDay());
//alert(d.getHours());
//alert(d);
*/

/*
for(var count = 0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while(count <= 5) {
    console.log(count);
    alert(count)
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");

if(idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[0].cor);
*/
/*
var fruta = {nome: "maçã", cor: "vermelha"};
//console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maçã","pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" | "));

//alert(lista[0]);

//var nome = "Mizael Netto";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time de futebol do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1*n2);
//console.log(frase.toLowerCase("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));