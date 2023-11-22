let vitorias = 185
let derrotas = 80

let saldoVitorias = calculadora(vitorias,derrotas)

function calculadora (NumA,NumB) {
    let resultado = NumA - NumB
    return resultado
}

if (saldoVitorias <= 10) {nivel = "Ferro"}
else if (saldoVitorias <= 20) {nivel = "Bronze"}
else if (saldoVitorias <= 50) {nivel = "Prata"}
else if (saldoVitorias <= 80) {nivel = "Ouro"}
else if (saldoVitorias <= 90) {nivel = "Diamante"}
else if (saldoVitorias <= 100) {nivel = "Lendário"}
else {nivel = "Imortal"}

console.log("O Herói tem de saldo de "+saldoVitorias+" está no nível de "+nivel)