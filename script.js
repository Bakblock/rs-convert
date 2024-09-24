document.getElementById('convertBtn').addEventListener('click', function() {
    let amount = document.getElementById('amount').value;
    
    if (amount === "" || isNaN(amount)) {
        alert("Veuillez entrer un montant valide.");
        return;
    }

    let rs = amount * 0.012;

    document.getElementById('result').textContent = amount + " en RS vaut : " + rs.toFixed(2) + " $";
});
