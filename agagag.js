let onlineServicePrice = 1;
let largerStoragePrice = 2;
let customizableProfilePrice = 2;
let addsonprice = 15;
let totalPrice = []
let sum = 0;

totalPrice.push(addsonprice);
totalPrice.push(onlineServicePrice);
totalPrice.push(largerStoragePrice);
totalPrice.push(customizableProfilePrice);

// document.querySelector("#total-real-num").textContent = totalPrice;
console.log(totalPrice);

function sumArr(totalPrice){
    let sum = 0
    for (let i = 0; i < totalPrice.length; i++){
        sum += totalPrice[i];
    }
    console.log(sum);
}

sumArr(totalPrice)