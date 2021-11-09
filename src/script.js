const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input", calculateTip);
});
//we take it the value shown on the slider and converting it into a input

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);
//registering user input inot our function

function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let TotalPeople = document.getElementById("AmountOfPeople").value;
    //if the inputs are not conserved as values they will show an error

    billInput.value = bill;

    let totalTip = parseFloat((bill * (tipPercent/100)));
    let total = parseFloat((bill + totalTip));

    let tipPerPerson = (totalTip / TotalPeople);
    let totalPerPerson = (total / TotalPeople);

    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;

    document.getElementById("tip-percent").textContent = `\$ ${tipPercent}%`;
    document.getElementById("split-num").textContent = TotalPeople;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
}

calculateTip();