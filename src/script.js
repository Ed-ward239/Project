const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});
//we take it the value shown on the slider and converting it into a input

const billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip);
//registering user input in our function

function calculateTip(){
    
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let TotalPeople = document.getElementById("PeopleAmount").value;
    //if the inputs are not conserved as values they will show an error

    billInput.value = bill.toFixed(2);
    
    var emptyBox = document.getElementById("bill").value;
        if (emptyBox == ""){
            alert("Please enter a number");
            tipPerPerson = 0;
        } 
   
    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));

    let tipPerPerson = (totalTip / TotalPeople).toFixed(2);
    let totalPerPerson = (total / TotalPeople).toFixed(2);

    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;

    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = TotalPeople;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
}

calculateTip();
