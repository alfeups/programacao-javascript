/*
Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas)
 onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. 
 Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de 
saída abaixo. Após cada linha deve ser imprimido o fim de linha.

Exemplo de Entrada	Exemplo de Saída
576                     576
                5 nota(s) de R$ 100,00
                1 nota(s) de R$ 50,00
                1 nota(s) de R$ 20,00
                0 nota(s) de R$ 10,00
                1 nota(s) de R$ 5,00
                0 nota(s) de R$ 2,00
                1 nota(s) de R$ 1,00
*/

let cem= 0, cinquenta= 0,  vinte= 0, dez= 0, cinco= 0, dois= 0, troco= 0;
    let valor = parseInt(gets());

    troco = valor;
    cem = parseInt(troco / 100);
    troco = troco - (cem *100);
    cinquenta = parseInt(troco / 50);
    troco = troco - (cinquenta * 50);
    vinte = parseInt(troco / 20);
    troco = troco - (vinte * 20);
    dez = parseInt(troco /10);
    troco = troco -(dez * 10);
    cinco = parseInt(troco / 5);
    troco = troco - (cinco * 5);
    dois = parseInt(troco / 2);
    troco = troco - (dois * 2); 

    console.log(valor);
    console.log(cem + " nota(s) de R$ 100,00");
    console.log(cinquenta + " nota(s) de R$ 50,00");
    console.log(vinte + " nota(s) de R$ 20,00");
    console.log(dez + " nota(s) de R$ 10,00");
    console.log(cinco + " nota(s) de R$ 5,00");
    console.log(dois + " nota(s) de R$ 2,00");
    console.log(troco + " nota(s) de R$ 1,00")
