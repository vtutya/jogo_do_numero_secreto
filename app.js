let listaDeNumerosSorteados = [];
let limiteDeTentatovas = 10;
// Gera um número aleatório entre 1 e 10 e armazena na variável numeroSecreto
let numeroSecreto = gerarNumeroALeatorio();
let tentativas = 1;


// Função para exibir texto em um elemento HTML específico
function exibirTextoNaTela(tag, Text) {
    let campo = document.querySelector(tag); // Seleciona o elemento HTML pelo seletor
    campo.innerHTML = Text; // Define o conteúdo HTML do elemento
    responsiveVoice.speak(Text, "Brazilian Portuguese Female", {rate: 1.2});
}
function exibirMensagemInicial() {
    // Exibe o título do jogo na tela
exibirTextoNaTela("h1", "Jogo do número secreto");
// Exibe a instrução do jogo na tela
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

}
exibirMensagemInicial();


// Função para verificar se o chute do usuário está correto
function verificarChute() {
    let chute = document.querySelector("input").value; // Obtém o valor do input
    console.log(chute == numeroSecreto); // Verifica se o chute é igual ao número secreto e exibe o resultado no console

    if ( chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas " : "tentativa";
        let mensagemTentativas = `Voce acertou com ${tentativas} ${palavraTentativa}`; 
        exibirTextoNaTela("P", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled"); // para habilitar o botao novo jogo
    }else{
        if(chute> numeroSecreto){
            exibirTextoNaTela("p", " O numero secreto é menor que o chute");
        } else{
            exibirTextoNaTela("p", "O secreto é maior que o chute");
        }
        tentativas++ // aumneta a quantidade de tentativas dentro do campo p
        limparCampo() // limpa o numero para ser inserido outro caso seja menor ou maior
    }
}


// Função para gerar um número aleatório entre 1 e 10
function gerarNumeroALeatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDeTentatovas + 1); // Retorna um número inteiro aleatório entre 1 e 10
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == limiteDeTentatovas){
        quantidadeDeElementosNaLista = [];
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){  // includes especifico do js , para ver se ja esta incluso na lista
        return gerarNumeroALeatorio();  // verifica se o numero ja foi escolhido ou nao
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);  // adiciona o numero escolhido na lista
        return numeroEscolhido;
    }
}
// função de limpar o campo dos numeros
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroALeatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}