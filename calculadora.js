CampoPeso = document.getElementById("peso")
CampoAltura = document.getElementById("altura")
botao = document.getElementById("calcular")
texto = document.getElementById("texto")
classificacao = document.getElementById("classificacao")

botao.addEventListener("click", function(){
    peso= CampoPeso.value
    altura= CampoAltura.value

    if(altura>=100){
        altura = altura/100
    } //coverter centiemtros em metros

    console.log(peso,altura)//teste dos valores

    if(peso==="" || altura===""){
        alert("Preencha todos os campos")
        return
    } else if (peso<=0  || altura<=0){
        alert("valores invalidos")
        return
    }

    imc = peso/(altura*altura)

    if(imc<18.5){
        texto.textContent = "Seu IMC é: "+ imc;
        classificacao.textContent = "Abaixo do Peso";
    } else if(imc<25){
        texto.textContent = "Seu IMC é: "+ imc;
        classificacao.textContent = "Peso Normal";
    } else if(imc<30){
        texto.textContent = "Seu IMC é: "+ imc;
        classificacao.textContent = "Sobrepeso";
    } else if(imc<35){
        texto.textContent = "Seu IMC é: "+ imc;
        classificacao.textContent = "Obesidade Grau I";
    } else if(imc<40){
        texto.textContent = "Seu IMC é: "+ imc;
        classificacao.textContent = "Obesidade Grau II";
    } else{
        texto.textContent = "Seu IMC é: "+ imc;
        classificacao.textContent = "Obesidade Grau III";
    } 
})