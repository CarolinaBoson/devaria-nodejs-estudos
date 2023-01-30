const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Além de seus dados, precisamos verificar se você está na lista de presença do horário.');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2004) {
        console.log('Você não tem 18 anos.');
    }else{
        readLine.question("Você tem habilitação? (Sim/Não)", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação para entrar no kart.');
            }else{
                readLine.question("Qual seu nome?", nome => {
                    switch(nome){
                        case 'Carolina' :
                            console.log('Bem vinda no kart Carolina!');
                            break;
                        case 'Douglas' :
                            console.log('Bem vindo ao kart Douglas!');
                        default:
                            console.log('Seu nome não foi identificado na lista de presença.');    
                    }
                })
            }
        })
    }
})