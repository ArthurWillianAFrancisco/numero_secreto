

//1ª versão do jogo
    /*var rodada = 1;

    function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {

        document.write("<header>"+frase+"</header>");
        pulaLinha();
    }

    function sorteia(n) {

        return Math.round(Math.random() * n);
    }



    function JogarNovamente(){

    const element = document.getElementById("novo-jogo");
    element.remove();

    var numeroPensado = sorteia(100);

    alert("Como funciona o jogo: Você só possui 10 tentativas para descobrio um número entre 1 e 100, Boa Sorte !!")
    var chute = parseInt(prompt("Já pensei. Qual número você acha que é?"));
    var tentativas = 0;



    while(chute != numeroPensado & tentativas < 10) {
        if(chute > numeroPensado) {
            alert("Você errou! Seu chute é maior que o número pensado!");
        
        } else {
            alert("Você errou! Seu chute é menor que o número pensado!");
        }
        tentativas++;
        var chute = parseInt(prompt("Qual número você acha que é?"));
    }

    tentativas++;

    if(tentativas > 10){
        alert("Você exedou a suas tentativas")
        document.write("<h1>Que pena você perdeu</h1>")
        mostra("Essa foi a " + rodada + "ª rodada")
        mostra("O último número que pensei foi " + numeroPensado)
        mostra("Você ultilisou todas as suas 10 tentativas")
        rodada++;
    }



    if(chute == numeroPensado & tentativas < 10){
        alert("Uau! Você acertou, pois eu pensei no " + numeroPensado);
        alert("Você precisou de " + tentativas + " tentativas para acertar")
        document.write("<h1>Parabens você conseguiu</h1>")
        mostra("Essa foi a " + rodada + "ª rodada")
        mostra("O último número que pensei foi " + numeroPensado)
        mostra("Você precisou de " + tentativas + " tentativas para acertar")
        rodada++;
    }

    mostra("_______________________________________________________________")
    document.write("<button  id='novo-jogo' onclick= 'JogarNovamente()'>Clique aqui para jogar novamente </button>")
    }
    }
    */