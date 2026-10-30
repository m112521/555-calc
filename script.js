// 1. Install git
// 2. Connect to VS code
// 3. Commit push
// 4. Insert text

let x = 10;
let y = 2;

function calcLunch(items) {
    let lunchCost = 0;
    for (let item of items) {
        let dish = item.split(":"); // ["Tiramisu", "200"]
        lunchCost = lunchCost + parseInt(dish[1]);
    }
    return [lunchCost, lunchCost/items.length];
}

function onButtonClick() {
    let results = document.querySelector("#results");
    let textRa  = document.querySelector("#ra").value;
    let textRb  = document.querySelector("#rb").value;
    let textC   = document.querySelector("#c").value;
    
    let unitRa  = +document.querySelector("#sra").value;
    let unitRb  = +document.querySelector("#srb").value;
    let unitC   = +document.querySelector("#src").value;
    
    let Ra = parseInt(textRa);
    let Rb = parseInt(textRb);
    let C  = parseInt(textC);

    let f = (1.44 / ((Ra*unitRa + 2*Rb*unitRb) * (C*unitC))).toFixed(2);
    console.log(`NE555 Output signal frequency: ${f} Hz`);

    results.textContent = `${f} Hz`;
}

function onButtonClickDuty() {
    let dresults = document.querySelector("#results-duty");
    let Ra = document.querySelector("#dra").value;
    let Rb = document.querySelector("#drb").value;
    
    let unitRa = +document.querySelector("#sdra").value;
    let unitRb = +document.querySelector("#sdrb").value;
    
    let d = 100*((Ra*unitRa + Rb*unitRb) / (Ra*unitRa + 2*Rb*unitRb)).toFixed(1);
    console.log(`NE555 Output signal Duty Cycle: ${d} %`);

    dresults.textContent = `${d} %`;
}



function changeBg() {
    let currentValue = document.querySelector("#bgs").value;
    document.body.style.backgroundColor = currentValue;

    let fDiv = document.querySelector("#freq-div");
    let dDiv = document.querySelector("#d-div");

    if (currentValue === "f") {
        dDiv.style.display = 'none';
        fDiv.style.display = 'block';
    }
    else if (currentValue === "d") {
        fDiv.style.display = 'none';
        dDiv.style.display = 'block';
    }
}
