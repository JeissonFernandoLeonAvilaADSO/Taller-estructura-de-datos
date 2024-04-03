const saldoInicial = 120000;
let interesAnual

if (saldo < 100000) {
    interesAnual = saldo * 0.03
} else {
    interesAnual = saldo * 0.04
}
alert(`Saldo final: $${(saldo + interesAnual).toFixed(2)}`);
alert(`Interés pagado: $${interesAnual.toFixed(2)}`);

