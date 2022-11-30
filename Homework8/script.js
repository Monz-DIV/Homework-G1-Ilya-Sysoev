let pizza = document.getElementById("pizza");
let pozy = document.getElementById("Pozy");
let plov = document.getElementById("Plov");
let tea = document.getElementById("Tea");
let desert = document.getElementById("Desert");

function printItog() {
    summa=parseInt(pizza.value) + parseInt(pozy.value) + parseInt(plov.value) + parseInt(tea.value) + parseInt(desert.value);
    document.getElementById("Itog").value=summa;
}
