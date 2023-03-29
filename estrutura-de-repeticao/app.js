const listaArgumentos = process.argv.slice(2);

console.log('---------------------------EXECUTANDO UM FOR---------------------------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}

console.log('---------------------------EXECUTANDO UM WHILE---------------------------');
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posição ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('---------------------------EXECUTANDO UM DO WHILE---------------------------');
let controladorDoWhile = 0;
do{
    console.log(`Posicao ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length)

console.log('---------------------------EXECUTANDO UM FOR OF---------------------------');

for(const argumento of listaArgumentos){
    console.log(`Valor lido = ${argumento}`);
}

