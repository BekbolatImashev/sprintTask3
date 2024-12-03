const rates = {
    USD: { buy: 429, sell: 431 },
    EUR: { buy: 507, sell: 509 }
};

function convert(containerNum) {
    const amount = document.getElementById(`amount${containerNum}`).value;
    const currency = document.getElementById(`currency${containerNum}`).value;
    
    document.getElementById(`kzt${containerNum}`).value = '';
    document.getElementById(`usd${containerNum}`).value = '';
    document.getElementById(`eur${containerNum}`).value = '';
    
    if (!amount) return;

    if (currency === 'KZT') {
        document.getElementById(`kzt${containerNum}`).value = '-';
        document.getElementById(`usd${containerNum}`).value = (amount / rates.USD.sell).toFixed(2);
        document.getElementById(`eur${containerNum}`).value = (amount / rates.EUR.sell).toFixed(2);
    } 
    else if (currency === 'USD') {
        document.getElementById(`kzt${containerNum}`).value = (amount * rates.USD.buy).toFixed(2);
        document.getElementById(`usd${containerNum}`).value = '-';
        document.getElementById(`eur${containerNum}`).value = ((amount * rates.USD.buy) / rates.EUR.sell).toFixed(2);
    }
    else if (currency === 'EUR') {
        document.getElementById(`kzt${containerNum}`).value = (amount * rates.EUR.buy).toFixed(2);
        document.getElementById(`usd${containerNum}`).value = ((amount * rates.EUR.buy) / rates.USD.sell).toFixed(2);
        document.getElementById(`eur${containerNum}`).value = '-';
    }
}


document.getElementById('amount1').oninput = () => convert(1);
document.getElementById('amount2').oninput = () => convert(2);
document.getElementById('amount3').oninput = () => convert(3);